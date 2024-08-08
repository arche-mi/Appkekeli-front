import React from 'react'
import ModalPaiement from '../ModalPaiement/ModalPaiement'

export default function Panier() {
    let HandleClick = ()=>{
        
        return <ModalPaiement/>
        
    }
    return (
        <div>
            <div className=" m-5">
                <main style={{ marginTop: "10rem" }}>

                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">

                            <ul className="list-group mb-3">
                                
                                <li className="list-group-item bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">RESUME DU PANIER</h6>
                                        
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">COMMANDER</button>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="d-flex justify-content-evenly align-items-center mb-3">
                                <span className="text-primary">Panier</span>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </h4>

                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                </main>
            </div>
            <ModalPaiement/>
        </div>
    )
}
