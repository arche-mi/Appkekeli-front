import React from 'react'
import { Link } from 'react-router-dom'

export default function VillesTemplate({ children, src }) {

    var HandleMouseOver = (e) => {

        const selectDiv = e.target.closest(".div-card").querySelector(".card-body")
        selectDiv.style.display = 'block'

    }

    var HandleMouseOut = (e) => {
        var selectDiv = document.querySelectorAll(".card-body")
        selectDiv.forEach((e) => {
            e.style.display = 'none'

        })
    }

    return (
        <div>
            <div className="card p-2 div-card" style={{ position: "relative" }} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                <img src={src} className="card-img" alt={children} />
                <h5 className="img-title" style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}>{children}</h5>
                <div className="card-body" style={{ position: "absolute", width:"100%",top: "70%", left: "50%", transform: "translate(-50%, -50%)", display: "none" }}>
                    <Link to={`/Ville/${children}`} className="btn btn-primary btn-link-space" >Voir services</Link>
                    <Link to={`/Ville/`} className="btn btn-primary btn-link-space">Voir plus</Link>
                </div>
            </div>
        </div>
    )
}