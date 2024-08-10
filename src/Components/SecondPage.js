import React from 'react'
// import { useEffect, useState } from react
import { useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SiteTouristic from './Body/siteTouristic/SiteTouristic'
import Vehicules from './Body/vehicules/Vehicules'
import jsonData from '../data/data.json'


function SecondPage(props) {
    // const id = props.match.params.id;
    const location = useLocation();

    // Accès à l'URL actuelle
    const currentUrl = location.pathname;
    // Extraire l'ID de l'URL
    const id = currentUrl.split('/')[2];
    console.log(jsonData)
    // this.useState = {

    // }

    // useEffect(() => {
    //     fetch("../data/data.json", {

    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // setJoke(data[0].joke);
    //             console.log(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    return (
        <div>
            <Header styles={{display: "none"}}/>
            {
                jsonData.code = 200 ? (
                    console.log(jsonData.data)
                ) : 
                (
                    console.log("Donner pas reçu")
                )
            }


            <div className=' bg-secondary text-dark' style={{ color: "black", backgroundColor: "", marginTop: "5rem" }}>
                <div className=''>
                    <h1 className=''>Section Site touristique de {id} </h1>
                    <SiteTouristic/>
                </div>
                <div className=''>
                    <h1 className=''>Section Logement</h1>
                    {/* <Villes /> */}
                    
                </div>
                <div className=''>
                    <h1 className=''>Section Vehicule</h1>
                    <Vehicules />
                </div>
                <div className=''>
                    <h1 className=''>Section Restaurant</h1>
                    {/* <Vehicules /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SecondPage
