import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashBoard from '../DashBoardAdmin/DashBoardAdmin'
import connexion from '../Assets/connexion.svg'
import { useToast } from '@chakra-ui/react'

function FormConnexion() {
    const toast = useToast()
    const navigate = useNavigate();  // Hook pour naviguer entre les routes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setrole] = useState('');
    const [prenom, setPrenom] = useState('');
    const [prestataireType, setprestataireType] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);  // Pour suivre l'état de la connexion

    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        var json = { email, password }
        // console.log(json);

        // Permet les requêtes depuis cette origine
        // http://localhost:3000/auth/login
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                // 'Authorization': `Bearer token`,
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('token', data.token)
                // console.log(localStorage.getItem("token"));

                var token = localStorage.getItem("token")

                fetch('http://localhost:8080/profile', {
                    method: 'GET',
                    // body: JSON.stringify(json),
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }).then(response => response.json())
                    .then((data) => {
                        console.log(data)
                        setrole(data.role)
                        setPrenom(data.firstName)
                        setprestataireType(data.prestataireType)

                        setIsAuthenticated(true)
                        toast({
                            title: 'Connexion reussie',
                            status: 'info',
                            duration: 9000,
                            isClosable: true,
                          })                        
                    })
                    .catch(error => console.error('Erreur:', error));

            })
            .catch(error => console.error('Erreur:', error));

        //  console.error('Erreur:', error));

      

    };
    // console.log(type);

    // if (isAuthenticated === 'true') {
    if (role === "prestataire" || role === "admin") {
        // alert()
        console.log(prestataireType);
        
        //  return <DashBoard state={"firstName":prenom}/>
        navigate('/DashBoard',  { state: {"firstName":prenom, "role": role,"type": prestataireType}});  // Remplacer par le composant à afficher après la connexion
    }else if (role === 'tourist') {
        navigate(`/?profile`);
    }
    
    return (
        <section className="" style={{ margin: "8rem" }}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={connexion}
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
                                {/* <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a> */}
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Valider</button>
                                <p className='mt-2'>
                                Vous n'avez de compte?
                                <Link className="text-decoration-none" to="/Inscription" style={{ color: '#2E865F' }}> Inscrivez-vous</Link>
                            </p>
                                {/* <p className="small fw-bold mt-2 pt-1 mb-0">vous n'avez de compte? <Link to="/Inscription"
                                    className="link-danger">Inscrivez-vous</Link></p> */}
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FormConnexion
