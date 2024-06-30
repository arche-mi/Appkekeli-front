import "./header.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        
        // <!-- Navbar-->
        <div>
        <header className="header back-header">
            <nav className="navbar navbar-expand-lg  py-3 header-nav">
                <div className=" container-navbar">
                    <a href="#" className="navbar-brand text-uppercase font-weight-bold">Akwaba ci</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                    
                    <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-div-ul">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Villes</a></li>
                            {/* <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Portfolio</a></li> */}
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                            <li className="nav-item li-a"><a href="#" className="nav-link"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                            <li className="nav-item li-auth2"><Link to='/SecondPage/FormLogin' className="nav-link text-uppercase font-weight-bold"> S'inscrire</Link></li>
                            <li className="nav-item li-auth2"><Link to="/SecondPage/FormConnexion" className="nav-link text-uppercase font-weight-bold">Se connecter</Link></li>
                        </ul>
                    </div>
                    
                </div>
                
            </nav>
            <div className="div-h1-header"><h1 className="text-uppercase font-weight-bold">Bienvenue en Côte d'Ivoire : Votre voyage commence ici !</h1>
            <h3 className=''>Préparez-vous pour une aventure inoubliable !</h3>
            <h4 className=''>Réservez votre hébergement et véhicule en ligne et partez à la découverte des merveilles ivoiriennes.</h4>

            <button className="btn-service">Proposer un service</button>
            <button className="btn-reserver">Reserver</button></div>
        </header>
        </div>

      
    )
}

export default Header;