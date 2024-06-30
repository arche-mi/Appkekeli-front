import React from 'react'
import Header from './Header/Header';
import Villes from './Body/villes/Villes'
import Footer from './Footer/Footer';
import Contact from './FormContact/Formcontact'


export default function MainPage() {
  return (
    <div>
      <Header/>
      <Villes/>
      <Contact/>
      <Footer/>
    </div>
  )
}
