import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

function FormInscriptionServices() {
    const navigate = useNavigate();  // Hook pour naviguer entre les routes
    const [email, setemail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const [ville, setville] = useState('');
    const [commune, setcommune] = useState('');
    const [role] = useState('prestataire'); // Le rôle est fixe ici
    const [prestataireType, setPrestataireType] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setPrestataireType((prevTypes) => {
            if (checked) {
                // Ajoute le type si la case est cochée
                return [...prevTypes, value];
            } else {
                // Retire le type si la case est décochée
                return prevTypes.filter((type) => type !== value);
            }
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        var json = { lastName, firstName, email, password, phone, ville, commune, role, prestataireType }
        // const role = Object.keys(role)
        // .filter(key => role[key] === true);
        //  delete jsonfinal.role
        // var role = "tourist"
        //  jsonfinal.push(role) 
        // console.log(role);

        console.log(json);
        // adresse Nest Js : http://localhost:3000/users/signup
        // Permet les requêtes depuis cette origine
        fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response)
            .then((data) => {
                console.log(data)
                window.location.replace('http://localhost:3001/Connexion');
            })
            .catch(error => console.error('Erreur:', error));
    };


    return (
        <div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="nom" id="nom_Services" value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder='Nom' />
                        <label htmlFor="floatingInput">Nom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="prenom" id="prenom_Services" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder='Prenom' />
                        <label htmlFor="floatingInput">Prenom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" name="email" id="email_Services" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="tel" className="form-control" name="numero" id="numero_Services" value={phone} onChange={(e) => setphone(e.target.value)} placeholder='Numero' />
                        <label htmlFor="floatingInput">Numero</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="ville" id="ville_Services" value={ville} onChange={(e) => setville(e.target.value)} placeholder='Ville' />
                        <label htmlFor="floatingInput">Ville</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" name="commune" id="commune_Services" value={commune} onChange={(e) => setcommune(e.target.value)} placeholder='Commune' />
                        <label htmlFor="floatingInput">Commune</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" name="password" id="password_Services" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Mot de passe' />
                        <label htmlFor="floatingInput">Mot de passe</label>
                    </div>

                    <div className="d-flex flex-column align-items-start">
                     
                        <div>
                            <input
                                type="checkbox"
                                value="vehicule"
                                checked={prestataireType.includes('vehicule')}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="exampleCheck2" className='mx-2'>
                            Véhicule
                            </label>
                        </div>
                        
                        <div>
                            <input
                                type="checkbox"
                                value="logement"
                                checked={prestataireType.includes('logement')}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="exampleCheck2" className='mx-2'>
                            Logement
                            </label>
                        </div>
                    
                    </div>



                    {/* <div className="form-group"> */}
                    {/* <div className="form-check">
                        <input className="form-check-input" type="checkbox" name='role' value="ACTEURLOGEMENT" id="flexCheckDefault" checked={role.option2}  onChange={(e) => setCheckboxes({
                                ...role,
                                option2: e.target.checked
                            })}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Acteur logement
                        </label>
                    </div>
                    <div className="form-check">

                        <input className="form-check-input" type="checkbox" name='role' value="ACTEURVEHICULE" id="flexCheckChecked" checked={role.option1}  onChange={(e) => setCheckboxes({
                                ...role,
                                option1: e.target.checked
                            })}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Acteur vehicule
                        </label>
                    </div> */}
                    {/* </div> */}

                    <div className="pt-4">
                        <ul className="list-inline">
                            <li>
                                <button className="btn btn-primary" type="submit">S'inscrire</button>
                            </li>
                            <li className='mt-2'>
                            Deja inscrit?
                                <Link className="text-decoration-none " to="/Connexion" style={{ color: '#2E865F' }}> se connecter</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormInscriptionServices
