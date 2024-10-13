import React from 'react'
import './styleModal.css'

export default function ModalLogement({state}) {
  return (
    <div>
       {/* <!-- Modal --> */}
       <div className="modal fade" id="ModalLogement" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-lg-site modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Informations sur le logement</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="card mb-3 div-img-site">
                                <div className="shadow-sm rounded-3">
                                    <div id={`Modal${state}`} className="carousel slide">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target={`#Modal${state}`} data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                                            <button type="button" data-bs-target={`#Modal${state}`} data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                            <button type="button" data-bs-target={`#Modal${state}`} data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                                        </div>
                                        <div className="carousel-inner" >
                                            <div className="carousel-item active">
                                                <img className='card-img card-img-top card-img-site' id='imgsrcLog1' alt='banco1' width='' height='' />
                                            </div>
                                            <div className="carousel-item">
                                                <img className='card-img card-img-top card-img-site' id='imgsrcLog2' alt='banco2' width='' height='' />
                                            </div>
                                            <div className="carousel-item">
                                                <img className='card-img card-img-top card-img-site' id='imgsrcLog3' alt='banco2' width='' height='' />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#Modal${state}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={`#Modal${state}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    </div>

                                    {/* <img src={Banco3} className="card-img-top card-img-site" alt="..." /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">PARC NATIONAL DU BANCO</h5>
                                        <p className="card-text text-start">Le parc national du Banco est un parc national de la Côte d'Ivoire situé en plein cœur d'Abidjan. « Banco » est une déformation du mot Ebrié * « Gbancô » et signifie « source d’eau rafraichissante »</p>
                                        <div className="card-text">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group text-start">Adresse : 9WVX+72R, Abidjan</li>
                                                <li className="list-group text-start">Superficie : 30 km²</li>
                                                <li className="list-group text-start">Date de création : 1953</li>
                                                <li className="list-group text-start">Téléphone : 22414059</li>
                                                <li className="list-group text-start">Coordonnées : 5° 23′ 40″ N, 4° 03′ 07″ O</li>
                                                <li className="list-group text-start">District : Abidjan</li>
                                            </ul>
                                        </div>
                                        <p className="card-text"></p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                    <button type="button" className="btn btn-primary">Reserver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
