import React from 'react'
import ModalVehicule from '../../Modal/ModalVehicule'

export default function Vehicules({children,state}) {

  {
    var showModal = (event) => {
        var imgSrc1 = document.getElementById('imgsrcVehi1');
        var imgSrc2 = document.getElementById('imgsrcVehi2');
        var imgSrc3 = document.getElementById('imgsrcVehi3');

        // Bouton qui a déclenché le modal
        var button = event.target;
        console.log(button)
        imgSrc1.setAttribute("src", state.src1)
        imgSrc2.setAttribute("src", state.src2)
        imgSrc3.setAttribute("src", state.src3)
    }
}
  
  return (
    <div className='vehicule'>
      <div className="container">
        <div className="">
          <div className="col">
            <div className="card shadow-sm rounded-3">
              <div id={`Carousel${children}`} className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner" style={{ height: "200px", backgroundSize: "cover" }}>
                  <div className="carousel-item active">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}

                    <img className='rounded-top card-img card-img-size' src={state.src1} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}}/>
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img card-img-size' src={state.src2} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}}/>
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img card-img-size' src={state.src3} alt='banco3' width='' height='' style={{filter: "brightness(70%)"}}/>
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
                <ul className="list-group list-group-flush">
                  <li className='list-group-item'> Type: Mono space</li>
                  <li className='list-group-item'>Marque: Peugeot 406</li>
                  <li className='list-group-item'>nombres palces: 4</li>
                  <li className='list-group-item'>Prix: 30$</li>
                  <li className='list-group-item'>Etat: Disponible</li>
                </ul>

                <div className="d-flex justify-content-around align-items-center mt-2">
                  {/* <div className="btn-group"> */}
                  <button type="button" className="btn btn-sm btn-outline-primary">Reserver</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ModalVehicule" onClick={showModal}>Voir plus</button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
        <ModalVehicule state = {state.value}/>
      </div>


    </div>
  )
}
