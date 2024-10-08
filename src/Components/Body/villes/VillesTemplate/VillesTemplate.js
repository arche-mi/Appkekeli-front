import React from 'react'
import { Link } from 'react-router-dom'

export default function VillesTemplate({ children, src }) {

    var HandleMouseOver = (e) => {

        const selectDiv = e.target.closest(".div-card").querySelector(".card-body")
        const selectText= e.target.closest(".div-card").querySelector(".img-title")
        const selectimg= e.target.closest(".div-card").querySelector(".card-img")
        selectDiv.style.display = 'block'
        selectText.style.display = 'block'
        selectimg.style.filter="brightness(50%)"
        selectimg.style.transition='all .4s ease-in-out'
        selectimg.style.transform='scale(1.1)'
    

    }

    var HandleMouseOut = (e) => {
        var selectDiv = document.querySelectorAll(".card-body")
        selectDiv.forEach((e) => {
            e.style.display = 'none'
            

        })
        const selectText= e.target.closest(".div-card").querySelector(".img-title")
        selectText.style.display = 'none'
        const selectimg= e.target.closest(".div-card").querySelector(".card-img")
        selectimg.style.removeProperty("filter");
        selectimg.style.removeProperty("transform");
    }

    return (
        <div>
            <div className="card p-2 div-card" style={{ position: "relative" }} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                <img src={src} className="card-img img-rounded img-fluid" alt={children} />
                <h5 className="img-title" style={{ position: "absolute", fontWeight:"600", fontSize:"1.5rem", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color: "white", display: "none" }}>{children}</h5>
                <div className="card-body flex-row" style={{ position: "absolute", width:"100%",top: "70%", left: "50%", transform: "translate(-50%, -50%)", display: "none" }}>
                    <Link to={`/Villes/${children}`} className="btn btn-primary m-2" >Voir services</Link>
                    <Link to={`/Villes/`} className="btn btn-secondary">Voir plus</Link>
                </div>
            </div>

            
        </div>

    )
}