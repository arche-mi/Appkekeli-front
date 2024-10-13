import React, { useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './profile.css'
import { useState } from 'react'
import { Button, Flex} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,useDisclosure
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'


export default function Profile({isAuthenticated}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const navigate = useNavigate(); 

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

  const handleLogout = () => {
    localStorage.clear()
    onClose()
    navigate(`/`);
};

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
                <div className="profile-item last">
                    <strong>Téléphone :</strong>
                    <span>{user.phone}</span>
                </div>     
              <>
              <Button colorScheme='red' onClick={onOpen}>
        Se deconnecter
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Deconnection
            </AlertDialogHeader>

            <AlertDialogBody>
              Vous allez etre deconnecter. Etes-vous sur de vouloir continuer ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Non
              </Button>
              <Button colorScheme='red' onClick={handleLogout} ml={3}>
                Oui
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>  
              </>          
            </div>
        </div>
      <Footer/>
    </>
  )
}
