import React from 'react'
import './FormContact.css'

function Formcontact() {
  return (
    <div className='w-50 m-auto' id='formContactId'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control border" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control border " id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>
      <button type='button' className='btn btn-primary p-1'>Envoyer</button>
    </div>
  )
}

export default Formcontact
