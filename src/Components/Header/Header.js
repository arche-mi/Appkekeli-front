// import "../Header/header.css"
import React from 'react'
import logo from '../Assets/logo.png'
import background_img from '../Assets/img-header.jpg'
import { Link } from 'react-router-dom'
import './header.css'

function Header(styles) {
  // console.log(styles)
  return (

    // <!-- Navbar-->
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="60" height="60" />
            <span className='span-logo'>AKWABA <span className=''>CI</span></span>
          </a>
        </div>
        <div className="container-fluid p-2">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='ms-auto d-flex'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item me-5">
                  <a className="nav-link" href="/">Accueil</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">Villes</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="#">Processus reservation</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="/#formContactId">Contact</a>
                </li>
                <li className="nav-item me-5">
                <Link to='/Panier' className='text-decoration-none'><button type="button" className="btn btn-primary position-relative">
                   Panier <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span className="visually-hidden">unread messages</span></span>
                  </button></Link>
                 
                </li>
                
              </ul>
              <button className="btn btn-outline-success me-2" type="button"><Link to='/Inscription' className="text-decoration-none text-reset">S'inscrire</Link></button>
              <button className="btn btn-outline-success" type="button"><Link to='/Connexion' className="text-decoration-none text-reset">Se connecter</Link></button>
            </div>
          </div>
        </div>
      </nav>
      <div className="card text-bg-dark" style={styles.styles}>
        <img src={background_img} className="card-img-bottom" alt="" height="520px" width="100vh"></img>
        <div className="card-img-overlay">
          <h3 className="text-uppercase font-weight-bold text-start text-wrap">Bienvenue en Côte d'Ivoire : Votre voyage commence ici !</h3>
          {/* style={{color:"#36FF04"}} */}
          <h5 className='text-uppercase text-start text-wrap '>Préparez-vous pour une aventure inoubliable !</h5>
          <h5 className='text-uppercase text-start text-wrap '>Réservez votre hébergement et véhicule en ligne et partez à la découverte des merveilles ivoiriennes.</h5>
          {/* <div className='btn-sr d-flex'>
            <button className="btn-service">Proposer un service</button>
            <button className="btn-reserver">Reserver</button>
          </div> */}

          <div className="d-flex gap-3 mt-5">
           <Link to='/Inscription' state={{value : "services"}}><button className="btn btn-primary d-inline-flex align-items-center" type="button">
              Proposer service
            </button></Link>
            <Link to='/Inscription' state={{value:"reserver"}}><button className="btn btn-outline-secondary d-inline-flex align-items-center" type="button">
              Reserver
            </button></Link>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Header;
