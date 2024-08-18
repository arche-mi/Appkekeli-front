import React from 'react'
// import './style.css'
import { Link } from 'react-router-dom'

function FormInscriptionReserver() {
    return (
        <div>
            <div className="">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input className="form-control" type="text" name="nom" id="nom_Reserver" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input className="form-control" type="text" name="nom" id="prenom_Reserver" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="text" name="email" id="email_Reserver" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero">Numero</label>
                        <input className="form-control" type="tel" name="numero" id="numero_Reserver" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pays">Pays de provenance</label>
                        <input className="form-control" type="text" name="pays" id="pays_Reserver" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input className="form-control" type="password" name="password" id="password_Reserver" required />
                    </div>
                    
                    <div className="pt-4">
                        <ul className="list-inline">
                            <li>
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </li>
                            <li>
                                <Link className="text-decoration-none" to="/Connexion">I am already a member</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormInscriptionReserver
