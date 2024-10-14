import React from 'react'
import ModalVehicule from '../../Modal/ModalVehicule'
import {
  Modal,
  ModalOverlay,
  ModalContent, useDisclosure, Button, 
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Vehicules({ state }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <div className='vehicule'>
      <div className="container">
        <div className="">
          <div className="col">
            <div className="card shadow-sm rounded-3">
              <div className="carousel slide">
                <div className="carousel-indicators">
                </div>
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
                <ul className="list-group list-group-flush" >
                  <li className='list-group-item fw-bold text-start'>{state.marque}</li>
                  <li className='list-group-item fw-bold text-start'> {state.modele}</li>
                  <li className='list-group-item fw-bold text-start'>{state.prix}</li>
                  <li className='list-group-item fw-bold text-start'>{state.disponible}</li>
                </ul>

                <div className="d-flex justify-content-start align-items-center mt-2">
                  {/* <div className="btn-group"> */}
                  <button type="button" className="btn btn-primary m-2">Reserver</button>
                  <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details du vehicule</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <img className='rounded-top card-img card-img-size' src={`data:image/png;base64,${state.photos[0]}`} alt={state.marque} width='' height='' />
          <div className="card-body">
                  <div className="card-text">
                    <ul className="list-group list-group-flush">
                      <li className="list-group text-start">Marque du vehicule: {state.marque}</li>
                      <li className="list-group text-start">Modele du vehicule : {state.modele}</li>
                      <li className="list-group text-start">Prix de la location : {state.pix}</li>
                      <li className="list-group text-start">Disponible : {state.disponible}</li>
                    </ul>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-primary">Reserver</button>
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


    </div>
  )
}
