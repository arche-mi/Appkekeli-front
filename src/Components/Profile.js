import React, { useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './profile.css'
import { useState } from 'react'

export default function Profile() {

  const [user, setUser] = useState({})

  useEffect(() => {
    var token = localStorage.getItem("token")
    fetch('http://localhost:8080/profile', {
      method: 'GET',
      // body: JSON.stringify(json),
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      },
  }).then(response => response.json())
      .then((data) => {
        setUser(data)
      })
      .catch(error => console.error('Erreur:', error));
  
  }, []) 

  return (
    <>
      <Header styles={{display: "none"}}/>  
      <div style={{height:'40vh', marginTop:'10rem'}} className="profile-container">
            <h1>Mon Profil</h1>
            <div className="profile-card">
                <div className="profile-item">
                    <strong>Nom :</strong>
                    <span>{user.firstName}</span>
                </div>
                <div className="profile-item">
                    <strong>Prenom :</strong>
                    <span>{user.lastName}</span>
                </div>
                <div className="profile-item">
                    <strong>Email :</strong>
                    <span>{user.email}</span>
                </div>
                <div className="profile-item">
                    <strong>Téléphone :</strong>
                    <span>{user.phone}</span>
                </div>                
            </div>
        </div>
      <Footer/>
    </>
  )
}
