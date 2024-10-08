import React from 'react'
import ModalPaiement from '../Modal/ModalPaiement'
import './panier.css'
import log from '../Assets/glace2.jpeg'
import useStore from '../store'

export default function Panier() {
    const userChoices = useStore((state) => state.userChoices);
  
    return (
        <div>
            <div className=" m-5">
                <main style={{ marginTop: "10rem" }}>

                    <div className="row g-5 d-flex align-items-start">
                        <div className="col-md-5 col-lg-4 order-md-last">

                            <ul className="list-group mb-3">
                                
                                <li className="list-group-item bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">RESUME DU PACKAGE</h6>
                                        
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$36</strong>
                                </li>
                            </ul>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalPaiement">RESERVER</button>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="d-flex justify-content-evenly align-items-center mb-3">
                                <span className="text-primary">Package</span>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </h4>

                            <ul className="list-group-item mb-3 lh-sm">
                            {userChoices.map((choice, index) => (
                              <li className="list-group-item d-flex justify-content-between" key={index[3]}>
                                     <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
                                        <div className='d-flex flex-column'>
                                        <h6 className="my-2">Product name</h6>
                                        <small className="text-muted d-flex align-items-center">Brief description</small>
                                        </div>
                                        
                                        <img src={log} class="rounded-circle img-fluid" width="55px" alt="Image circulaire"></img>

                                    </div>
                                    <span className="text-muted">{choice[3] }</span>
                                    <button className='btn btn-secondary'>Retirer</button>
                              </li>
                            ))}
                                
                            </ul>
                           
                        </div>
                    </div>
                </main>
            </div>
            <ModalPaiement/>
        </div>
    )
}
