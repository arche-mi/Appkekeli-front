import React from 'react'
import './styleModal.css'

export default function ModalVehicule({state}) {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="ModalVehicule" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog modal-lg-site modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Informations sur le vehicule</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="card mb-3 div-img-site">
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
