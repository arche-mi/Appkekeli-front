import React, { useState } from 'react'
import ModalLogement from '../../Modal/ModalLogement'
import useStore from '../../store';
import {
  Modal,
  ModalOverlay,
  ModalContent, useDisclosure, Button,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Logement({ children, state }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedItems, setSelectedItems] = useState([]); // État pour stocker les éléments sélectionnés

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
                <div className="carousel-inner" style={{ height: "200px", backgroundSize: "cover" }}>
                  <div className='carImg' onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                    {
                      state.photos.map((key) => {
                        return <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${key}`} alt={state.marque} width='' height='' />
                      })
                    }
                  </div>
                </div>
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
                  <Button onClick={onOpen}>Open Modal</Button>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Details du vehicule</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${state.photos[0]}`} alt={state.marque} width='' height='' />
                        <div className="card-body">
                          <h5 className="card-title">Nom : {state.nom}</h5>
                          <br />
                          <div className="card-text">
                            <ul className="list-group list-group-flush">
                              <li className="list-group text-start">Description : {state.description}</li>
                              <li className="list-group text-start">Prix : {state.prix}</li>
                              <li className="list-group text-start">Disponible : {state.disponible}</li>
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
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
