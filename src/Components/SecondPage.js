import React from 'react'
import Header2 from './Header2/Header2'
import Footer from './Footer/Footer'
import Villes from './Body/villes/Villes'

function SecondPage() {
    return (
        <div>
            <Header2 />
            <div className='' style={{ color: "", backgroundColor: "black" }}>
                <div className=''>
                    <h1 className=''>Section Site touristique de la ville correspondant au clique</h1>
                    <Villes/>
                </div>
                <div className=''>
                    <h1 className=''>Section Logement</h1>
                    <Villes/>
                </div>
                <div className=''>
                    <h1 className=''>Section Vehicule</h1>
                    <Villes/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SecondPage
