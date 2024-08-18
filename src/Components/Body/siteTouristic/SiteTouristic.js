import React from 'react'
import ModalSiteTouristic from '../../Modal/ModalSiteTouristic'
import Banco1 from '../../Assets/ForêtBanco1.jpg'
import Banco2 from '../../Assets/ForetBanco2.jpg'
import Banco3 from '../../Assets/ForetBanco3.jpg'

export default function SiteTouristic({children,state}) {

  return (
    <div>
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm rounded-3">
              <div id={`Carousel${children}`} className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner" style={{height: "200px", backgroundSize: "cover"}}>
                  <div className="carousel-item active">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}

                    <img className='rounded-top card-img' src={Banco1} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}} />
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img' src={Banco2} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}}  />
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img' src={Banco3} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}}  />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#Carousel${children}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#Carousel${children}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
             

              <div className="card-body">
                <p className="card-text">PARC NATIONAL DU BANCO</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ModalSiteTouristic">Voir plus</button>
                  </div>
                  <i className="bi bi-heart">9 j'aime</i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="album py-5 bg-light">
    <div className="m-auto p-2">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3">
        <div className="card p-2 div-card" style={{ position: "relative" }}>
          <img className="card-img" />
          <h5 className="img-title" style={{  position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", color: "" }}>Site de grand bassam</h5>
          <div className="card-body" style={{ position: "absolute", width:"100%",top: "70%", left: "50%", transform: "translate(-50%, -50%)", display: "none"  }}>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Voir plus</button>
          </div>
        </div>
      </div>
      <ModalPaiement/> */}
      <ModalSiteTouristic state = {state.value} ></ModalSiteTouristic>
    </div>

  )
}
