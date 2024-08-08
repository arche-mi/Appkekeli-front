import React from 'react'
import img_header from '../../Assets/img-header.jpg'
export default function Vehicules() {
  return (
    <div className='vehicules' style={{ height: "250px", padding: "2rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      <div className=''>
        <img className='img-vehicules' src={img_header} alt='' style={{ height: "65%", width: "100%" }} />
        <div className=''>
          <li className='type'> Type</li>
          <li className='marque'>Marque</li>
          <li className='nombrePalce'>nombres palces</li>
          <li className='prix'>Prix</li>
          <li className='etat'>Etat</li>
          <button type='' className='btn-vehicules'>Reserver</button>
        </div>
      </div>


    </div>
  )
}
