import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function FormConnexion() {
    const navigate = useNavigate();  // Hook pour naviguer entre les routes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [prenom, setPrenom] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);  // Pour suivre l'état de la connexion
    const [error, setError] = useState(null);  // Pour gérer les erreurs éventuelles

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Permet les requêtes depuis cette origine
        // http://localhost:3000/auth/login
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                // 'Authorization': `Bearer token`,
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error('Échec de la connexion');
            }
            return response.json() // Récupère la réponse JSON
        })
            .then((data) => {
                console.log(data.user.data.id)
                // var id = data.user.data.id
                var msg = data.user.data.msg
                var type = data.user.data.type
                var prenom = data.user.data.prenom
                setType(type)
                setPrenom(prenom)

                alert(msg)
                localStorage.setItem('token', data.user.access_token);  // Stockez le token dans localStorage

                // async function getProfile() {
                const token = localStorage.getItem('token');
                console.log(token)

                // Si l'utilisateur est authentifié, on affiche le composant Dashboard (ou un autre)



                // fetch(`http://localhost:3000/profile`, {
                //   method: 'GET',
                //   headers: {
                //     'Authorization': `Bearer ${token}`,  // Ajoutez le token ici
                //   },
                // }).then(response => response.json())
                // .then((data)=>{
                //     alert()
                //     console.log(data)
                //     nomUser = data.user.nom
                //     alert("Utilisateur"+nomUser+"est connecter")
                // }).catch(error => {
                //     // Afficher l'erreur dans une alerte
                //     alert('Erreur lors de la récupération du profil: ' + error);
                //   })

                // const data = await response.json();
                // if (response.ok) {
                //   console.log('Profil utilisateur:', data);
                // } else {
                //   console.error('Erreur lors de la récupération du profil:', data.message);
                // }
                //   }
                setIsAuthenticated(true);  // Mise à jour de l'état si connexion réussie
            })
            .catch(err => {
                console.error(err.message);
                setError('Nom d’utilisateur ou mot de passe incorrect');
            })
        //  console.error('Erreur:', error));
    };
    console.log(type);

    if (isAuthenticated) {
        if (type === "ACTEURLOGEMENT" || type === "ACTEURVEHICULE") {
            // return <DashBoard/>
            navigate('/DashBoardAdmin', { state: { 'prenom': prenom, 'type': type } });  // Remplacer par le composant à afficher après la connexion
        } else if (type = 'ACTEURCLIENT') {
            navigate(`/?prenom=${prenom}`);
        }
    }
    return (
        <section className="" style={{ margin: "8rem" }}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <p className="lead fw-normal me-3">Connexion </p>

                            </div>

                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form3Example3" name='email' className="form-control form-control-lg"
                                    placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                            </div>

                            {/* <!-- Password input --> */}
                            <div data-mdb-input-init className="form-outline mb-3">
                                <input type="password" id="form3Example4" name='password' className="form-control form-control-lg"
                                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {/* <label className="form-label" htmlFor="form3Example4">Password</label> */}
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-login">Valider</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">vous n'avez de compte? <Link to="/Inscription"
                                    className="link-danger">Inscrivez-vous</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FormConnexion
