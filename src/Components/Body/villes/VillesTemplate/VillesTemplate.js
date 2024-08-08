import React from 'react'
import { Link } from 'react-router-dom'

export default function VillesTemplate({children,src}) {
    
        var HandleMouseOver = (e)=>{

            const selectDiv = e.target.closest(".div-card").querySelector(".card-body")
            selectDiv.style.display= 'block'
            
          }
          
          var HandleMouseOut = (e)=>{
            var selectDiv = document.querySelectorAll(".card-body")
            selectDiv.forEach((e)=>{
                e.style.display= 'none'
              
            })
          }      
    
    return (
        <div>
            <div className="card p-2 div-card" style={{ position: "relative" }} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                <img src={src} className="card-img" alt={children} />
                <h5 className="img-title" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}>{children}</h5>
                <div className="card-body" style={{ position: "absolute", top: "6rem", display: "none" }}>
                    <Link to={`/SecondPage/${children}`} className="btn btn-primary m-2" >Voir services</Link>
                    <Link to={`/SecondPage/`} className="btn btn-primary m-2">Voir plus</Link>
                </div>
            </div>
        </div>
    )
}
