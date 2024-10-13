// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import './style.css'

import ModalAjoutLogement from "../Modal/ModalAjoutLogement"
import ModalAjoutVehicule from "../Modal/ModalAjoutVehicule"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Assurez-vous d'importer le CSS de react-toastify

export default function DashBoardAdmin() {
    const navigate = useNavigate();  // Hook pour naviguer entre les routes
    const location = useLocation();
    const { firstName, role } = location.state || {}; // Récupérer les données passées via navigate
    // État qui gère l'affichage des différentes sections (true = visible, false = caché)
    // const [sections, setSections] = useState({
    //     section1: false,
    //     section2: false,
    //     section3: false,
    // });

    // // Fonction pour afficher ou cacher une section indépendamment
    // const toggleSection = (section) => {
    //     setSections((prevSections) => ({
    //         ...prevSections,
    //         [section]: !prevSections[section], // Inverse l'état de la section cliquée
    //     }));
    // };

    //Gerer le toats
    //   const [searchParams] = useSearchParams();
    //   const prenom = searchParams.get('prenom');   // Récupère la valeur du paramètre "prenom"

    useEffect(() => {
        // Vérifie si le toast a déjà été affiché
        const hasDisplayedToast = localStorage.getItem('hasDisplayedToast');

        // Si le prénom est présent et le toast n'a pas encore été affiché
        if (firstName && role && !hasDisplayedToast) {
            
            toast.success(`Bienvenue, ${role}&nbsp; ${firstName} !`);
            // Met à jour localStorage pour indiquer que le toast a été affiché
            localStorage.setItem('hasDisplayedToast', 'true');
        }
    }, [firstName, role]);

    const handleAccueil =  () =>{

        navigate(`/`);
    }

    const [logement, setLogement] = useState([]);
    const [vehicule, setVehicule] = useState([]);
        
        // Appel initial de la fonction fetch
        
        fetch('http://localhost:8080/residences', {
            method: 'GET',
            // body: JSON.stringify(json),
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
            .then((data) => {
                console.log(data.residences)
                setLogement(data.residences)
                // setrole(data.role)
                // setPrenom(data.firstName)
                // setprestataireType(data.prestataireType)


            })
            .catch(error => console.error('Erreur lors de la récupération des données des residences:', error));

            fetch('http://localhost:8080/vehicules', {
                method: 'GET',
                // body: JSON.stringify(json),
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())
                .then((data) => {
                    console.log(data.vehicules)
                    setVehicule(data.vehicules)
    
                })
                .catch(error => console.error('Erreur lors de la récupération des données vehicules:', error));
    


    const vehiculedata = [{ "Numéro": "1", "Marque": "Toyota", "Modèle": "Mini van", "Prix": "30$", "Disponibilité": "disponible" }, { "Numéro": "2", "Marque": "Toyota", "Modèle": "Mini van", "Prix": "30$", "Disponibilité": "disponible" }]

    const logementdata = [{ "Numéro": "1", "Nom": "Toyota", "Description": "Mini van", "Prix": "30$", "Disponibilité": "disponible" }, { "Numéro": "2", "Marque": "Toyota", "Modèle": "Mini van", "Prix": "30$", "Disponibilité": "disponible" }]


    return (
        <div>
            <header className='header-admin'>
                <h1><i className="fas fa-tachometer-alt"></i> Tableau de Bord</h1>
                <div className=''>
                    <button className=" view-ac-dash" onClick={handleAccueil}> Aller à l'acceuil</button>
                    <button id="logout" className='btn btn-secondary'><i className="fas fa-sign-out-alt"></i> Se déconnecter</button>
                </div>
            </header>

            <div className="container container-admin">
                <aside className="sidebar">
                    <ul>
                        <li><a href="#"><i className="fas fa-user-cog"></i> Gérer les comptes</a></li>
                        <hr />
                        <li><a href="#"><i className="fas fa-file-signature"></i> Gérer les demandes d'inscription des prestataires</a></li>
                        <hr />
                        <li ><a href="#"><i className="fas fa-car"></i> Gérer les véhicules</a></li>
                        <hr />
                        {/* onClick={() => toggleSection('vehicule')} */}
                        <li ><a href="#"><i className="fas fa-home"></i> Gérer les logements</a></li>
                        <hr />
                        {/* onClick={() => toggleSection('logement')} */}
                        <li ><a href="#"><i className="fas fa-users"></i> Consulter les statistiques</a></li>
                        <hr />
                        {/* onClick={() => toggleSection('statistique')} */}
                        <li><a href="#"><i className="fas fa-cogs"></i> Gérer les avis</a></li>
                    </ul>
                </aside>

                <main className="dashboard">

                    <div>
                        <h3>Statistiques</h3>
                        <p>Ici sont affichées les statistiques de vos logements...</p>
                    </div>

                    {/* {sections.vehicule && ( */}
                    <section className="card card-section">
                        <h2><i className="fas fa-car-side"></i> Véhicules</h2>
                        <div className='d-flex justify-content-end'>

                            <button className="view" data-bs-toggle="modal" data-bs-target="#ModalAjoutVehicule">
                                {/* <i className="fas fa-eye"></i>  */}
                                Ajouter</button>
                        </div>
                        <div className="table-responsive">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Numéro</th>
                                        <th>Marque</th>
                                        <th>Modèle</th>
                                        <th>Prix</th>
                                        <th>Disponibilité</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        vehicule.map((key) => {
                                            return (
                                                <tr>
                                                    <td></td>
                                                    <td>{key.marque}</td>
                                                    <td>{key.modele}</td>
                                                    <td>{key.prix}</td>
                                                    <td>{key.disponible}</td>
                                                    <td>
                                                        <button className="view"><i className="fas fa-eye"></i> Consulter</button>
                                                        <button className="edit"><i className="fas fa-edit"></i> Editer</button>
                                                        <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                                                    </td>
                                                </tr>)
                                        })
                                    }

                                </tbody>
                            </table >
                        </div>
                        <ModalAjoutVehicule />
                    </section>
                    {/* )} */}

                    {/* {sections.logement && ( */}
                    <section className="card">
                        <h2><i className="fas fa-building"></i> Logements</h2>

                        <div className='d-flex justify-content-end'>

                            <button className="view" data-bs-toggle="modal" data-bs-target="#ModalAjoutLogement">
                                {/* <i className="fas fa-eye"></i>  */}
                                Ajouter</button>
                        </div>

                        <div className="table-responsive">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Numéro</th>
                                        <th>Nom</th>
                                        <th>Description</th>
                                        <th>Prix</th>
                                        <th>Disponibilité</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        logement.map((key) => {
                                            return (
                                                <tr>
                                                    <td></td>
                                                    <td>{key.nom}</td>
                                                    <td>{key.description} </td>
                                                    <td>{key.prix}</td>
                                                    <td>{key.disponible}</td>
                                                    <td>
                                                        <button className="view"><i className="fas fa-eye"></i> Consulter</button>
                                                        <button className="edit"><i className="fas fa-edit"></i> Editer</button>
                                                        <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                                                    </td>
                                                </tr>)
                                        })}

                                </tbody>
                            </table>
                        </div>
                        <ModalAjoutLogement />
                    </section>
                    {/* )} */}
                    {/* {sections.statistique && ( */}
                    <section className="card">
                        <h2><i className="fas fa-building"></i> Statistiques</h2>
                        <div className="table-responsive">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Numéro</th>
                                        <th>réservations</th>
                                        <th>Revenus générés</th>
                                        <th>Origine</th>
                                        <th>Disponibilité</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Residence</td>
                                        <td>3chambres salon</td>
                                        <td>30$</td>
                                        <td>Disponible</td>
                                        <td>
                                            <button className="view"><i className="fas fa-eye"></i> Consulter</button>
                                            <button className="edit"><i className="fas fa-edit"></i> Editer</button>
                                            <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <ModalAjoutLogement /> */}
                    </section>
                    {/* )} */}
                </main>
            </div>

            <footer className='foot-dashboard'>
                <p>&copy; 2024 - {role}&nbsp;{firstName} Dashboard</p>
            </footer>
            <ToastContainer position="top-left" autoClose={1500} hideProgressBar={true} />
        </div>
    )
}
