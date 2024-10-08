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
            <Header styles={{ display: "none" }} />
           

            <div className=' text-dark' style={{margin: '8rem 0 0 0'}}>
                    <h1 className='h1'>Section Site touristique {id} </h1>
                <div className=''>
                    <div className='album py-2 '>
                    <div className="container">
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                        
                            <SiteTouristic state={{ value: "SiteTouristic1",src1: Banco1,src2: Banco2,src3: Banco3 }}>SiteTouristic1</SiteTouristic>
                            <SiteTouristic state={{ value: "SiteTouristic2",src1: cathedrale1,src2: cathedrale2, src3: cathedrale3 }}>SiteTouristic2</SiteTouristic>
                            <SiteTouristic state={{ value: "SiteTouristic3",src1: cathedrale1,src2: cathedrale2, src3: cathedrale3}}>SiteTouristic3</SiteTouristic>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='' style={{margin: '8rem 0 0 0'}}>Section Restaurant {id}</h1>
                    <div className='album py-2 '>
                    <div className="container">
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            <Restaurant state={{ value: "Restaurant1",src1: Banco1,src2: Banco2,src3: Banco3 }}>Restaurant1</Restaurant>
                            <Restaurant state={{ value: "Restaurant2",src1: cathedrale1,src2: cathedrale2,src3: cathedrale3 }}>Restaurant2</Restaurant>
                            <Restaurant state={{ value: "Restaurant3",src1: Banco1,src2: Banco2,src3: Banco3 }}>Restaurant3</Restaurant>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='' style={{margin: '8rem 0 0 0'}}>Section Logement {id}</h1>
                    <div className='album py-2 '>
                        <div className="container">
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            <Logement state={{ value: "Logement1",src1: Banco1,src2: Banco2,src3: Banco3 }}>Logement1</Logement>
                            <Logement state={{ value: "Logement2",src1: cathedrale1,src2: cathedrale2,src3: cathedrale3 }}>Logement2</Logement>
                            <Logement state={{ value: "Logement3",src1: Banco1,src2: Banco2,src3: Banco3 }}>Logement3</Logement>
                        </div>
                    </div>
                    </div>

                </div>
                <div className=''>
                    <h1 className='' style={{margin: '8rem 0 0 0'}}>Section Vehicule {id}</h1>
                    <div className='album py-2 '>
                    <div className="container">
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                            <Vehicules state={{ value: "Vehicule1",src1: Banco1,src2: Banco2,src3: Banco3 }}>Vehicules1</Vehicules>
                            <Vehicules state={{ value: "Vehicule2",src1: cathedrale1,src2: cathedrale2,src3: cathedrale3 }}>Vehicules2</Vehicules>
                            <Vehicules state={{ value: "Vehicule3",src1: Banco1,src2: Banco2,src3: Banco3 }}>Vehicules3</Vehicules>
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
