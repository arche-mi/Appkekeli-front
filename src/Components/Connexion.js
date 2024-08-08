import React from 'react'
import Header from './Header/Header'
import FormConnexion from './FormConnexion/FormConnexion'
import Footer from './Footer/Footer'

export default function Connexion() {
  return (
    <div>
      <Header styles={{display: "none"}}/>
      <FormConnexion/>
      <Footer/>
    </div>
  )
}
