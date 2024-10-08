import React from 'react'
import ModalSiteTouristic from '../../Modal/ModalSiteTouristic'

export default function SiteTouristic({ children, state }) {
  console.log(state.value)
  {
    var showModal = (event) => {
      var imgSrc1 = document.getElementById('imgsrcSite1');
      var imgSrc2 = document.getElementById('imgsrcSite2');
      var imgSrc3 = document.getElementById('imgsrcSite3');

      // Bouton qui a déclenché le modal
      var button = event.target;
      console.log(button)
      imgSrc1.setAttribute("src", state.src1)
      imgSrc2.setAttribute("src", state.src2)
      imgSrc3.setAttribute("src", state.src3)
    }
  }
  return (
    <div>
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

                    <img className='rounded-top card-img card-img-size' src={state.src1} alt='banco3' width='' height='' style={{ filter: "brightness(70%)" }} />
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img card-img-size' src={state.src2} alt='banco3' width='' height='' style={{ filter: "brightness(70%)" }} />
                  </div>
                  <div className="carousel-item">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    <img className='rounded-top card-img card-img-size' src={state.src3} alt='banco3' width='' height='' style={{ filter: "brightness(70%)" }} />
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
                    <button type="button" className="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#ModalSiteTouristic" onClick={showModal}>Voir plus</button>
                  </div>
                  <i className="bi bi-heart">9 j'aime</i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ModalSiteTouristic state={state.value}></ModalSiteTouristic>
    </div>

  )
}
