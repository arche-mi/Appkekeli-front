import React from 'react'
import { Link } from 'react-router-dom'
import './Villes.css'
import abidjan from '../../Assets/Abidjan1.jpg'
import yamoussoukro from '../../Assets/yamoussoukro.jpeg'
import bouake from '../../Assets/bouake.jpeg'
import daloa from '../../Assets/daloa.jpeg'
import sanspedro from '../../Assets/sans pedro.jpeg'
import korhogo from '../../Assets/korhogo.jpeg'
import aboisso from '../../Assets/Aboisso.jpg'
import gagnoa from '../../Assets/gagnoa.jpeg'

export default function Villes() {
  return (
    <div className='villes'>
      <div className='villesInfo'>
        <img className='villesInfo-img' src={abidjan} alt='img-abidjan'/>
        <h4 className='villesInfo-h1'><Link to="/SecondPage/ville=abidjan">Abidjan</Link></h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={yamoussoukro} alt=''/>
        <h4 className='villesInfo-h1'>Yamoussoukro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={bouake} alt=''/>
        <h4 className='villesInfo-h1'>Bouake</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={daloa} alt=''/>
        <h4 className='villesInfo-h1'>Daloa</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div>

      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={korhogo} alt=''/>
        <h4 className='villesInfo-h1'>Korhogo</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={gagnoa} alt=''/>
        <h4 className='villesInfo-h1'>Gagnoa</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={aboisso} alt=''/>
        <h4 className='villesInfo-h1'>Aboisso</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div> 
      
      <div className='villesInfo'>
        <img className='villesInfo-img' src={sanspedro} alt=''/>
        <h4 className='villesInfo-h1'>Sans pedro</h4>
        <button type='' className='villesInfo-btn'>Voir les services</button>
      </div>
      
    </div>
  )
}
