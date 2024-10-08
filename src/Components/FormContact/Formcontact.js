import React from 'react'
import './FormContact.css'

function Formcontact() {
  return (
    <div className="pb-5">
    <h1 className="h1">Contact</h1>
    <div className='w-50 container m-auto ' id='formContactId'>
      <div className="mb-3 flex-column d-flex">
        <label htmlFor="exampleFormControlInput1" className="form-label d-flex flex-row align-items-start">Email address</label>
        <input type="email" className="form-control border" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3 flex-column d-flex">
        <label htmlFor="exampleFormControlTextarea1" className="form-label d-flex flex-row align-items-start">Example textarea</label>
        <textarea className="form-control border " id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <button type='button' className='btn btn-primary'>Envoyer</button>
    </div>
    </div>
  )
}

export default Formcontact
