import React, { useState } from 'react'
import ModalLogement from '../../Modal/ModalLogement'
import useStore from '../../store';


export default function Logement({ children, state }) {

  const [selectedItems, setSelectedItems] = useState([]); // État pour stocker les éléments sélectionnés

  var showModal = (event) => {
    var imgSrc1 = document.getElementById('imgsrcLog1');
    var imgSrc2 = document.getElementById('imgsrcLog2');
    var imgSrc3 = document.getElementById('imgsrcLog3');

    // Bouton qui a déclenché le modal
    var button = event.target;
    console.log(button)
    imgSrc1.setAttribute("src", state.src1)
    imgSrc2.setAttribute("src", state.src2)
    imgSrc3.setAttribute("src", state.src3)
  }

  const addChoice = useStore((state) => state.addChoice);

  const handleItemClick = (event) => {
    // console.log(event.target.closest(".card-body"));
    var json = {}
    json.children = children
    event.target.closest(".card-body").querySelectorAll('.list-group-item').forEach((element, i) => {
      var c = element.innerHTML

      json[i] = c


    });
    // console.log(json);
    addChoice(json)

  };


  var HandleMouseOver = (e) => {

    const selectimg = e.target.closest(".carImg").querySelectorAll(".card-img")
    // console.log(selectimg);

    selectimg.forEach((key) => {
      // key.filter = "brightness(70%)";
      key.style.transition = 'all .4s ease-in-out';
      key.style.transform = 'scale(1.1)';
    })

  }

  var HandleMouseOut = (e) => {
    const selectimg = e.target.closest(".carImg").querySelectorAll(".card-img")

    selectimg.forEach((key) => {
      // key.filter = "brightness(70%)";
      key.style.removeProperty("filter");
      key.style.removeProperty("transform");
    })

  }



  return (
    <div>
      <div className="container">

        <div className="">
          <div className="col">
            <div className="card shadow-sm rounded-3">
              <div id={`Carousel${children}`} className="carousel slide">
                {/* <div className="carousel-indicators">
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                  <button type="button" data-bs-target={`#Carousel${children}`} data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div> */}
                <div className="carousel-inner" style={{ height: "200px", backgroundSize: "cover" }}>
                <div className='carImg' onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                  <div className="carousel-item active">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                    {
                    
                    state.photos.map((key)=>{
            // console.log(key.replaceAll("\\","//"));
            

                     return <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${key}`} alt={state.nom} />
                    })
                  }
                  </div>
                  
                </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target={`#Carousel${children}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#Carousel${children}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button> */}
              </div>


              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold text-start">{state.nom}</li>
                  <li className="list-group-item fw-bold text-start">{state.description}</li>
                  <li className="list-group-item fw-bold text-start">{state.prix}</li>
                  <li className="list-group-item fw-bold text-start">{state.disponible}</li>
                </ul>

                <div className="d-flex justify-content-start align-items-center mt-2">
                  {/* <div className="btn-group"> */}
                  <button type="button" className="btn btn-primary m-2" onClick={handleItemClick}>Reserver</button>
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ModalLogement" onClick={showModal}>Voir plus</button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ModalLogement state={state.nom} />
    </div>
  )
}
