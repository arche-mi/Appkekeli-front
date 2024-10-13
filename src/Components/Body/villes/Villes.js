
import React, { Component, useRef } from 'react'
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

export default class Villes extends Component {

  render() {
    return (
      <div className='pt-5' id='formCityId'>
        <h1 className='h1'  ref={this.targetRef}> Nos services</h1>
      <div className="album py-5">
        <div className="container">
        <div className="m-auto p-2">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3">

            <VillesTemplate src={abidjan}>Abidjan</VillesTemplate>
            <VillesTemplate src={yamoussoukro}>Yamoussoukro</VillesTemplate>
            <VillesTemplate src={bouake}>Bouake</VillesTemplate>
            <VillesTemplate src={daloa}>Daloa</VillesTemplate>
            <VillesTemplate src={sanspedro}>Sans pedro</VillesTemplate>
            <VillesTemplate src={korhogo}>Korhogo</VillesTemplate>
            <VillesTemplate src={aboisso}>Aboisso</VillesTemplate>
            <VillesTemplate src={gagnoa}>Gagnoa</VillesTemplate>

           
          </div>
        </div>
        </div>
      </div>
      </div>
    )

  }
}