import "../Header/header.css"

function Header(){
    return(
        
        // <!-- Navbar-->
        <div>
        <header className="header back-header" style={{height: "50vh"}}>
            <nav className="navbar navbar-expand-lg  py-3 header-nav">
                <div className=" container-navbar">
                    <a href="#" className="navbar-brand text-uppercase font-weight-bold">Akwaba ci</a>
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
                    
                    <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-div-ul">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                            {/* <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Portfolio</a></li> */}
                            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                            <li className="nav-item li-a"><a href="#" className="nav-link"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                            <li className="nav-item li-auth2"><a href="#" className="nav-link text-uppercase font-weight-bold">S'inscrire</a></li>
                            <li className="nav-item li-auth2"><a href="#" className="nav-link text-uppercase font-weight-bold">Se connecter</a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </nav>
        </header>
        </div>

      
    )
}

export default Header;