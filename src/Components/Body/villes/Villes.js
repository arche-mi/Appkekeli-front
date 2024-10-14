
import React, { useEffect, useState } from 'react'
import VillesTemplate from './VillesTemplate/VillesTemplate'
import './Villes.css'

import abidjan from '../../Assets/Abidjan1.jpg'
import yamoussoukro from '../../Assets/yamoussoukro.jpeg'
import bouake from '../../Assets/bouake.jpeg'
import daloa from '../../Assets/daloa.jpeg'
import sanspedro from '../../Assets/sans pedro.jpeg'
import korhogo from '../../Assets/korhogo.jpeg'
import aboisso from '../../Assets/Aboisso.jpg'
import gagnoa from '../../Assets/gagnoa.jpeg'
import {Spinner} from '@chakra-ui/react'
import apiClient from '../../../api/api_client'


const Villes = ({targetRef}) => {
  const [villes,setVilles]=useState(null)
  const [isLoading,setIsLoading]=useState(true)


  const fetchCities=async()=>{
    let data=await apiClient.getCities()
    setVilles(()=>data)
    setIsLoading(()=>false)
  }

  useEffect(()=>{
    fetchCities()
  },[])

    return (
      <div className='pt-5' id='formCityId'>
        <h1 className='h1'  ref={targetRef}> Nos destinations</h1>
      <div className="album py-5">
        <div className="container">
          { isLoading && (<Spinner size="xl" />)}

          {!isLoading && (<div className="m-auto p-2">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3">
            {
              villes.map((ville)=>(<VillesTemplate src={ville.imageUrl} id={ville.id}>{ville.name}</VillesTemplate>))
            }
          
          </div>
        </div>
)}
        </div>
      </div>
      </div>
    )
}

export default Villes
