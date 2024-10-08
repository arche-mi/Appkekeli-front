import React, {useRef} from 'react'
import Header from './Header/Header';
import Villes from './Body/villes/Villes'
import Footer from './Footer/Footer';
import Contact from './FormContact/Formcontact'
// // import DashBoardAdmin from './DashBoardAdmin/DashBoardAdmin';
// import DashBoardPrestataire from './DashBoardPrestataire/DashBoardPrestataire';


export default function MainPage() {
  const targetRef = useRef(null);

  const scrollToSection = () => {
     // Vérifier si la référence existe avant d'appeler scrollIntoView
     if (this.targetRef.current) {
      this.targetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("L'élément cible n'existe pas ou n'est pas monté.");
    }
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection}/>
      <Villes targetRef={targetRef}/>
      <Contact/>  
      <Footer/>
      {/* <DashBoardAdmin/> */}
      {/* <DashBoardPrestataire/> */}
    </div>
  )
}
