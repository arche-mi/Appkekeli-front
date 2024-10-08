import React, {useState} from 'react'
// import './style.css'
import { Link } from 'react-router-dom'

function FormInscriptionReserver() {
    const [nom , setnom] = useState(null)
    const [prenom , setprenom] = useState(null)
    const [email , setemail] = useState(null)
    const [password , setpassword] = useState(null)
    const [numero , setnumero] = useState(null)
    const [paysprovenance , setpaysprovenance] = useState(null)

        const handleSubmit = (event) => {
            event.preventDefault(); // Empêche le rechargement de la page
           
               var jsonfinal = {}
                // console.log(json);
               
            // const elements = form.elements
            // console.log(elements)
            // const nom = elements.value.nom
            // const prenom = elements.value.prenom
            // const email = elements.value.email
            // const numero = elements.value.numero
            // const paysProvenance = elements.value.paysProvenance
            // const password = elements.value.password
            // console.log(nom)
            // Récupérer les données du formulaire
        //     const formData = new FormData(form);
        //    var formDataSet= formData.set(state.type ,state.acteur);
        //     // Vous pouvez parcourir les paires clé/valeur
        //     htmlFor (let [key, value] of formData.entries()) {
        //         console.log(key, value);
        //     }

            // alert(nom)

            // const API_URL = process.env.REACT_APP_API_URL;
            // Ou envoyer les données à une API
             // Permet les requêtes depuis cette origine
            fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                body: JSON.stringify(jsonfinal),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Erreur:', error));
        };

        return (
            <div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="nom" id="nom_Reserver" placeholder="" value={nom} onChange={(e)=> setnom(e.target.value)}/>
                        <label htmlFor="floatingInput">Nom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="prenom" id="prenom_Reserver" placeholder="" value={prenom} onChange={(e)=>{setprenom(e.target.value)}}/>
                        <label htmlFor="floatingInput">Prenom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email_Reserver" placeholder="" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" name="numero" id="numero_Reserver" placeholder="" />
                        <label htmlFor="floatingInput">Numero</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="pays" id="pays_Reserver" placeholder="" />
                        <label htmlFor="floatingInput">Pays de provenance</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password_Reserver" placeholder="" />
                        <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="form-group" style={{ display: 'none' }}>

                        <input className="form-control" type="text" name='typeacteur' value="ACTEURCLIENT" id="type_Reserver" required />
                    </div>

                    <div className="pt-4">
                        <ul className="list-inline">
                            <li>
                                <button type='submit' className='btn btn-primary'>S'inscrire</button>
                            </li>
                            <li>
                                <Link className="text-decoration-none" to="/Connexion" style={{color:'#2E865F'}}>Deja inscrit? Se connecter</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>

        )
    }

    export default FormInscriptionReserver
