// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent, Button,
    AlertDialogOverlay, useDisclosure
} from '@chakra-ui/react'
import ModalAjoutLogement from "../Modal/ModalAjoutLogement"
import ModalAjoutVehicule from "../Modal/ModalAjoutVehicule"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Assurez-vous d'importer le CSS de react-toastify

export default function DashBoardAdmin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const deleteRef = React.useRef()
    const navigate = useNavigate();  // Hook pour naviguer entre les routes
    const location = useLocation();
    const [currentVehicule, setCurrentVehicule] = useState()
    const [currentLogement, setCurrentLogement] = useState()
    const [token, setToken] = useState()
    const drawer = useDisclosure()
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

        // Appel initial de la fonction fetch
        setToken(localStorage.getItem("token"))

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
                setVehicule(data.vehicules)
            })
            .catch(error => console.error('Erreur lors de la récupération des données vehicules:', error));
        // Vérifie si le toast a déjà été affiché
        const hasDisplayedToast = localStorage.getItem('hasDisplayedToast');

        // Si le prénom est présent et le toast n'a pas encore été affiché
        if (firstName && role && !hasDisplayedToast) {

            toast.success(`Bienvenue, ${role}&nbsp; ${firstName} !`);
            // Met à jour localStorage pour indiquer que le toast a été affiché
            localStorage.setItem('hasDisplayedToast', 'true');
        }
    }, [firstName, role]);

    const handleAccueil = () => {
        navigate(`/`);
    }

    const [logement, setLogement] = useState([]);
    const [vehicule, setVehicule] = useState([]);


    const handleLogout = () => {
        localStorage.clear()
        onClose()
        navigate(`/`);
    };

    const handleDeleteVehicule = (id) => {
        fetch(`http://localhost:8080/vehicules/${id}`, {
            method: 'DELETE',
            // body: JSON.stringify(json),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).then(response => response)
            .then((data) => {
                console.log(data);

                window.location.reload();
            })
            .catch(error => console.error(error));
    }

    const handleDeleteResidence = (id) => {
        fetch(`http://localhost:8080/residences/${id}`, {
            method: 'DELETE',
            // body: JSON.stringify(json),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }).then(response => response)
            .then((data) => {
                console.log(data);

                window.location.reload();
            })
            .catch(error => console.error(error));
    }

    const handleShowVehicule = (e) => {
        onOpen()
        setCurrentVehicule(e)
    }

    const handleShowLogement = (e) => {
        drawer.onOpen()
        setCurrentLogement(e)
    }

    return (
        <div>
            <header className='header-admin'>
                <h1 style={{ color: 'white' }} ><i className="fas fa-tachometer-alt"></i> Taxeau de Bord</h1>
                <div className=''>
                    <button style={{padding: '0.5rem'}} className=" view-ac-dash" onClick={handleAccueil}> Aller à l'acceuil</button>
                    <>
                        <Button colorScheme='red' onClick={handleLogout}>
                            Se deconnecter
                        </Button>                        
                    </>
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

                            <button style={{ padding: "0.5rem" }} className="view" data-bs-toggle="modal" data-bs-target="#ModalAjoutVehicule">
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

                                        vehicule.map((key, index) => {
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{key.marque}</td>
                                                    <td>{key.modele}</td>
                                                    <td>{key.prix}</td>
                                                    <td>{key.disponible}</td>
                                                    <td>
                                                        <>
                                                            <Button ref={cancelRef} colorScheme='teal' onClick={handleShowVehicule.bind(null, key)}>
                                                            Consulter
                                                            </Button>
                                                            <Drawer
                                                                isOpen={isOpen}
                                                                placement='right'
                                                                size='lg'
                                                                onClose={onClose}
                                                                finalFocusRef={cancelRef}
                                                            >
                                                                <DrawerOverlay />
                                                                <DrawerContent>
                                                                    <DrawerCloseButton />
                                                                    <DrawerHeader>Details du vehicule</DrawerHeader>

                                                                    <DrawerBody>
                                                                    {
                                                                        currentVehicule && <div className="vehicle-container">
                                                                        <div className="vehicle-card">
                                                                            <img src={currentVehicule.photoUrl} alt={currentVehicule.model} className="currentVehicule-image" />
                                                                            <div className="currentVehicule-details">
                                                                                <h2>{currentVehicule.model}</h2>
                                                                                <p><strong>Marque :</strong> {currentVehicule.marque}</p>
                                                                                <p><strong>Model :</strong> {currentVehicule.modele}</p>
                                                                                <p><strong>Prix :</strong> {currentVehicule.prix} €</p>
                                                                                <p><strong>Disponibilite :</strong> {currentVehicule.disponible}</p>                                                                                
                                                                                {  currentVehicule.photos[0] && <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${currentVehicule.photos[0]}`} alt={key.nom} />}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    }
                                                                    </DrawerBody>

                                                                    <DrawerFooter>
                                                                        <Button variant='outline' mr={3} onClick={onClose}>
                                                                            Fermer
                                                                        </Button>
                                                                    </DrawerFooter>
                                                                </DrawerContent>
                                                            </Drawer>
                                                        </>
                                                        {/* <button style={{ padding: "0.5rem" }} className="view"><i className="fas fa-eye"></i> Consulter</button> */}
                                                        {/* <button className="edit"><i className="fas fa-edit"></i> Editer</button> */}
                                                        <Button onClick={handleDeleteVehicule.bind(null, key.id)}>Supprimer</Button>
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

                            <button style={{ padding: "0.5rem" }} className="view" data-bs-toggle="modal" data-bs-target="#ModalAjoutLogement">
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
                                                    <>
                                                            <Button ref={cancelRef} colorScheme='teal' onClick={handleShowLogement.bind(null, key)}>
                                                            Consulter
                                                            </Button>
                                                            <Drawer
                                                                isOpen={drawer.isOpen}
                                                                placement='right'
                                                                size='lg'
                                                                onClose={drawer.onClose}
                                                                finalFocusRef={cancelRef}
                                                            >
                                                                <DrawerOverlay />
                                                                <DrawerContent>
                                                                    <DrawerCloseButton />
                                                                    <DrawerHeader>Details du logement</DrawerHeader>

                                                                    <DrawerBody>
                                                                    {
                                                                        currentLogement && <div className="vehicle-container">
                                                                        <div className="vehicle-card">
                                                                            <img src={currentLogement.photoUrl} alt={currentLogement.model} className="currentLogement-image" />
                                                                            <div className="currentLogement-details">
                                                                                <h2>{currentLogement.model}</h2>
                                                                                <p><strong>Nom :</strong> {currentLogement.nom}</p>
                                                                                <p><strong>Description :</strong> {currentLogement.description}</p>
                                                                                <p><strong>Prix :</strong> {currentLogement.prix} €</p>
                                                                                <p><strong>Disponibilite :</strong> {currentLogement.disponible}</p>                                                                                
                                                                                {  currentLogement && currentLogement.photos[0] && <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${currentLogement.photos[0]}`} alt={key.nom} />}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    }
                                                                    </DrawerBody>

                                                                    <DrawerFooter>
                                                                        <Button variant='outline' mr={3} onClick={drawer.onClose}>
                                                                            Fermer
                                                                        </Button>
                                                                    </DrawerFooter>
                                                                </DrawerContent>
                                                            </Drawer>
                                                        </>
                                                        {/* <button style={{ padding: "0.5rem" }} className="view"><i className="fas fa-eye"></i> Consulter</button> */}
                                                        {/* <button className="edit"><i className="fas fa-edit"></i> Editer</button> */}
                                                        <Button onClick={handleDeleteResidence.bind(null, key.id)}>Supprimer</Button>
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
                                            <button style={{ padding: "0.5rem" }} className="view"><i className="fas fa-eye"></i> Consulter</button>
                                            {/* <button className="edit"><i className="fas fa-edit"></i> Editer</button> */}
                                            {/* <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button> */}
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
