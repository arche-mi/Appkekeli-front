import React, { useRef } from 'react'
import Header from './Header/Header'
import FormInscriptionReserver from './FormInscriptionReserver/FormInscriptionReserver'
import FormInscriptionServices from './FormInscriptionServices/FormInscriptionServices'
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'


export default function Insrciption() {
    const myRef = useRef(null);
    {

        let { state } = useLocation();
        // if (state.value === "reserver") {
        //     console.log("youpi reserver")
        //     // console.log(myRef.current)
        // } else if (state.value === "services") {
        //     console.log(state.value)
        // }
    }
    return (
        <div>
            <Header styles={{ display: "none" }} />
            <div className="accordion w-50 m-auto" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Reserver
                        </button>
                    </h2>
                    <div id="collapseOne" ref={myRef.current} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <FormInscriptionReserver/>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Proposer service
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <FormInscriptionServices />
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}
