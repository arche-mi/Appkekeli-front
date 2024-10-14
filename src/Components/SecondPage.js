import React, { useState,useEffect } from 'react'
import './secondPage.css'
import { useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SiteTouristic from './Body/siteTouristic/SiteTouristic'
import Restaurant from './Body/Restaurants/Restaurant'
import Logement from './Body/logement/Logement'
import Vehicules from './Body/vehicules/Vehicules'
// import jsonData from '../data/data.json'
/******* import image*/
import cathedrale1 from './Assets/CathedralePlateau1.jpeg'
import cathedrale2 from './Assets/CathedralePlateau2.jpeg'
import cathedrale3 from './Assets/CathedralePlateau3.jpeg'

import Banco1 from './Assets/ForêtBanco1.jpg'
import Banco2 from './Assets/ForetBanco2.jpg'
import Banco3 from './Assets/ForetBanco3.jpg'


function SecondPage(props) {
    // const id = props.match.params.id;
    const location = useLocation();
    const [token, setToken] = useState()

    // Accès à l'URL actuelle
    const currentUrl = location.pathname;
    // Extraire l'ID de l'URL
    const id = currentUrl.split('/')[2];
    // console.log(jsonData)

    useEffect(() => {
        setToken(localStorage.getItem("token"))
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
    }, []);

    const [logement, setLogement] = useState([]);
    const [vehicule, setVehicule] = useState([]);



    // }, []); // Le tableau vide [] fait que l'effet ne se déclenche qu'une seule fois au montage

    // Gestion des différents états (chargement, erreur, affichage des données)
    // if (loading) {
    //     return <p>Chargement...</p>;
    // }

    // if (error) {
    //     return <p>Erreur : {error}</p>;
    // }
    console.log('log' + logement)
    console.log('vehi' + vehicule)


    // var dataLogement = [{ value: "Logement1", src1: Banco1, src2: Banco2, src3: Banco3 }, { value: "Logement2", src1: cathedrale1, src2: cathedrale2, src3: cathedrale3 }, { value: "Logement3", src1: Banco1, src2: Banco2, src3: Banco3 }]
    // var dataVehicule = [{ value: "Vehicule1", src1: Banco1, src2: Banco2, src3: Banco3 }, { value: "Vehicule2", src1: cathedrale1, src2: cathedrale2, src3: cathedrale3 }, { value: "Vehicule3", src1: Banco1, src2: Banco2, src3: Banco3 }]
    return (
        <div>
            <Header styles={{ display: "none" }} />


            <div className=' text-dark' style={{ margin: '8rem 0 0 0' }}>
                <h1 className='h1' style={{ fontWeight: "600", textTransform: "uppercase" }}>Section Site touristique {id} </h1>
                <div className=''>
                    <div className='album py-2 '>
                        <div className="container">
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>

                                <SiteTouristic state={{ value: "SiteTouristic1", src1: Banco1, src2: Banco2, src3: Banco3 }}>SiteTouristic1</SiteTouristic>
                                <SiteTouristic state={{ value: "SiteTouristic2", src1: cathedrale1, src2: cathedrale2, src3: cathedrale3 }}>SiteTouristic2</SiteTouristic>
                                <SiteTouristic state={{ value: "SiteTouristic3", src1: cathedrale1, src2: cathedrale2, src3: cathedrale3 }}>SiteTouristic3</SiteTouristic>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='' style={{ margin: '8rem 0 0 0', fontWeight: "600", textTransform: "uppercase" }}>Section Restaurant {id}</h1>
                    <div className='album py-2 '>
                        <div className="container">
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                                <Restaurant state={{ value: "Restaurant1", src1: Banco1, src2: Banco2, src3: Banco3 }}>Restaurant1</Restaurant>
                                <Restaurant state={{ value: "Restaurant2", src1: cathedrale1, src2: cathedrale2, src3: cathedrale3 }}>Restaurant2</Restaurant>
                                <Restaurant state={{ value: "Restaurant3", src1: Banco1, src2: Banco2, src3: Banco3 }}>Restaurant3</Restaurant>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='' style={{ margin: '8rem 0 0 0', fontWeight: "600", textTransform: "uppercase" }}>Section Logement {id}</h1>
                    <div className='album py-2 '>
                        <div className="container">
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                                {

                                    (logement !== 0) ? (
                                        logement.map((key) => {

                                            return <Logement state={key}>{key.nom}</Logement>
                                        })) : <div className=''><h1 className=''>Pas encore de logement ajouter</h1></div>
                                }

                            </div>
                        </div>
                    </div>

                </div>
                <div className=''>
                    <h1 className='' style={{ margin: '8rem 0 0 0', fontWeight: "600", textTransform: "uppercase" }}>Section Vehicule {id}</h1>
                    <div className='album py-2 '>
                        <div className="container">
                            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                                {

                                    (vehicule !== 0) ? (
                                        vehicule.map((s, index) => {

                                            return <Vehicules key={index} state={s}>{s.marque}</Vehicules>
                                        })) : <div className=''><h1 className=''>Pas encore de vehicule ajouter</h1></div>
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default SecondPage
