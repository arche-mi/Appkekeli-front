
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
      
      <div className="p-5">
        <div className="div-grid">
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
    )
    
  }
}