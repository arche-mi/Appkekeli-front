import React, {useRef, useEffect} from 'react'
import Header from './Header/Header';
import Villes from './Body/villes/Villes'
import Footer from './Footer/Footer';
import Contact from './FormContact/Formcontact'
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Assurez-vous d'importer le CSS de react-toastify
// // import DashBoardAdmin from './DashBoardAdmin/DashBoardAdmin';
// import DashBoardPrestataire from './DashBoardPrestataire/DashBoardPrestataire';

import { signal } from "@preact/signals-core";


export default function MainPage() {
  const targetRef = useRef(null);
  const isAuthenticatedSignal = signal(false);


  useEffect(() => {
    setInterval(function() {
      var token = localStorage.getItem("token")
      if (token!==undefined) {
        isAuthenticatedSignal.value = true
      }
    }, 1000);
  }, [isAuthenticatedSignal]);

  
//Gerer le toats
  const [searchParams] = useSearchParams();
  const prenom = searchParams.get('prenom');   // Récupère la valeur du paramètre "prenom"
 

  useEffect(() => {
    // Vérifie si le toast a déjà été affiché
    const hasDisplayedToast = localStorage.getItem('hasDisplayedToast');

    // Si le prénom est présent et le toast n'a pas encore été affiché
    if (prenom && !hasDisplayedToast) {
      toast.success(`Bienvenue, ${prenom} !`);
      // Met à jour localStorage pour indiquer que le toast a été affiché
      localStorage.setItem('hasDisplayedToast', 'true');
    }
  }, [prenom]);


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
      <Header scrollToSection={scrollToSection} isAuthenticated={isAuthenticatedSignal}/>
      <Villes targetRef={targetRef}/>
      <Contact/>  
      <Footer/>
      <ToastContainer position="top-left" autoClose={1500}   hideProgressBar={true}/>
      {/* <DashBoardAdmin/> */}
      {/* <DashBoardPrestataire/> */}
    </div>
  )
}
