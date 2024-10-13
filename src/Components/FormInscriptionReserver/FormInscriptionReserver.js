import React, {useState} from 'react'
// import './style.css'
import { Link } from 'react-router-dom'

function FormInscriptionReserver() {
    const [lastName , setlastName] = useState(null)
    const [firstName , setfirstName] = useState(null)
    const [email , setemail] = useState(null)
    const [password , setpassword] = useState(null)
    const [phone , setphone] = useState(null)
    const [paysProvenance , setpaysProvenance] = useState(null)
    const [role] = useState('tourist')


        const handleSubmit = (event) => {
            event.preventDefault(); // Empêche le rechargement de la page
           
               var json = {lastName, firstName, email, password, phone, paysProvenance, role}
             
                console.log(JSON.stringify(json));
                

            //adresse Nest Js http://localhost:3000/users/signup
             // Permet les requêtes depuis cette origine
            fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                body: JSON.stringify(json),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response)
                .then(data => {
                    window.location.replace('http://localhost:3001/Connexion');
                })
                .catch(error => console.error('Erreur:', error));
        };

        return (
            <div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="lastName" id="nom_Reserver" placeholder="nom" value={lastName} onChange={(e)=> setlastName(e.target.value)}/>
                        <label htmlFor="floatingInput">Nom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="prenom" id="prenom_Reserver" placeholder="Prenom" value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/>
                        <label htmlFor="floatingInput">Prenom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email_Reserver" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" name="numero" id="numero_Reserver" placeholder="numero" value={phone} onChange={(e)=>{setphone(e.target.value)}} />
                        <label htmlFor="floatingInput">Numero</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="pays" id="pays_Reserver" placeholder="PaysProvenance" value={paysProvenance} onChange={(e)=>{setpaysProvenance(e.target.value)}}/>
                        <label htmlFor="floatingInput">Pays de provenance</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password_Reserver" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="pt-4">
                        <ul className="list-inline">
                            <li>
                                <button type='submit' className='btn btn-primary'>S'inscrire</button>
                            </li>
                            <li className='mt-2'>
                            Deja inscrit?
                                <Link className="text-decoration-none" to="/Connexion" style={{color:'#2E865F'}}> Se connecter</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>

        )
    }

    export default FormInscriptionReserver
