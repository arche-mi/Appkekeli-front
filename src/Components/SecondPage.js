import React from 'react'
// import { useEffect, useState } from react
import { useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SiteTouristic from './Body/siteTouristic/SiteTouristic'
import Restaurant from './Body/Restaurants/Restaurant'
import Logement from './Body/logement/Logement'
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
                    
                    <SiteTouristic state = {{value: "SiteTouristic1"}}>SiteTouristic1</SiteTouristic>
                    <SiteTouristic state = {{value: "SiteTouristic2"}}>SiteTouristic2</SiteTouristic>
                    <SiteTouristic state = {{value: "SiteTouristic3"}}>SiteTouristic2</SiteTouristic>
                </div>
                <div className=''>
                    <h1 className=''>Section Restaurant {id}</h1>
                    <Restaurant state = {{value: "Restaurant1"}}>Restaurant1</Restaurant>
                    <Restaurant state = {{value: "Restaurant2"}}>Restaurant2</Restaurant>
                    <Restaurant state = {{value: "Restaurant3"}}>Restaurant3</Restaurant>
                </div>
                <div className=''>
                    <h1 className=''>Section Logement {id}</h1>
                        <Logement state = {{value: "Logement1"}}>Logement1</Logement>
                        <Logement state = {{value: "Logement2"}}>Logement2</Logement>
                        <Logement state = {{value: "Logement3"}}>Logement3</Logement>
                    
                </div>
                <div className=''>
                    <h1 className=''>Section Vehicule {id}</h1>
                    <Vehicules state = {{value: "Vehicule1"}}>Vehicules1</Vehicules>
                    <Vehicules state = {{value: "Vehicule2"}}>Vehicules2</Vehicules>
                    <Vehicules state = {{value: "Vehicule3"}}>Vehicules3</Vehicules>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default SecondPage
