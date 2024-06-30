import React from 'react'
import './FormContact.css'

function Formcontact() {
  return (
    <div className='form-contact'>
      <input type='email' name='' id='' className='' placeholder='Email'/>
      <input type='tel' name='' id='' className='' placeholder='numero'/>
      <textarea name='' id='' className='' cols='10' rows='10' placeholder='message'></textarea>
      <button type='submit' className=''>Envoyer</button>
    </div>
  )
}

export default Formcontact
