import React from 'react';
// import './App.css';  // Assurez-vous d'inclure ce fichier pour les styles CSS globaux
import logo from '../Assets/logo.png'
import logo_twitter from '../Assets/X-Twitter.svg'
import logo_instagram from '../Assets/Instagram.svg'
import logo_facebook from '../Assets/facebook.svg'

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img className='' src={logo} alt='logo' width="150" height="150" />
            </a>
          </div>

          <div className="col mb-3">

          </div>

          <div className="col mb-3">
            <h5>Contenu site</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Villes</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Processus reservation</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Panier</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Infos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Côte d'ivoire, ci</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">kekeli.akagbor@gmail.com</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+225 0556273199</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+225 0142127104</a></li>
            </ul>
          </div>


        </footer>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 kekely Corporation, Inc. Tous droits réservés.</p>
            <ul className="list-inline d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_twitter} alt='' width='' height=''/></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_instagram} alt='' width='' height=''/></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><img className='' src={logo_facebook} alt='' width='' height=''/></a></li>
            </ul>
          </div>
      </div>
    </div>
  );
}

