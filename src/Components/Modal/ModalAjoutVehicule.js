import React, { useState } from 'react'

export default function ModalPaiement() {

    // const [marque, setmarque] = useState('');
    // const [modele, setmodele] = useState('');
    // const [prix, setprix] = useState('');
    // const [disponible, setdisponible] = useState('');
    // const [photo, setphoto] = useState('');



// const MultiImageForm = () => {
    // State pour les champs texte
    const [formData, setFormData] = useState({
      marque: '',
      modele: '',
      prix: '',
      disponible: ''
    });
  
    // State pour stocker les images encodées en base64
    const [imagesBase64, setImagesBase64] = useState([]);
  
    // Fonction pour gérer le changement dans les champs texte
    const handleTextChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Fonction pour gérer la sélection des fichiers et les encoder en base64
    const handleFileChange = (e) => {
      const files = e.target.files;
      const readers = [];
  
      setImagesBase64([]); // Réinitialiser le tableau avant d'ajouter les nouvelles images
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setImagesBase64((prevImages) => [...prevImages, reader.result]);
        };
  
        reader.readAsDataURL(file); // Lire le fichier en tant que base64
        readers.push(reader);
      }
    };
  
    // Fonction pour gérer l'envoi du formulaire au serveur
    const handleSubmit = async (e) => {
      e.preventDefault(); // Empêcher le rafraîchissement de la page
  
      const base64Image = imagesBase64.map(key=>key.split(',')[1]
      )
    //   console.log(base64Image);
      
      // Préparer les données à envoyer
      const payload = {
        ...formData,          // Ajouter les champs texte
        photos: base64Image,  // Ajouter les images encodées en base64
      };

      console.log(payload);
      var token = localStorage.getItem("token")
  
      fetch('http://localhost:8080/vehicules', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    }).then(response => response)
        .then((data) => {
            console.log(data)
            window.location.replace('http://localhost:3001/DashBoard');
            // setrole(data.role)
            // setPrenom(data.firstName)
            // setprestataireType(data.prestataireType)


        })
        .catch(error => console.error('Erreur:', error));
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Empêche le rechargement de la page

        

    //     var json = { marque, modele, prix, disponible, photo }

    //     console.log(json);

    //     fetch('http://localhost:8080/auth/register', {
    //         method: 'POST',
    //         body: JSON.stringify(json),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response)
    //         .then((data) => {
    //             console.log(data)
    //         })
    //         .catch(error => console.error('Erreur:', error));
    // };

    return (
        <div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="ModalAjoutVehicule" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Formulaiire d'ajout de vehicule</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} >
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="marque" value={formData.marque} onChange={handleTextChange} id="marque_Logement"  placeholder='Marque' />
                                    <label htmlFor="floatingInput">marque</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="modele" id="modele_Logement" value={formData.modele} onChange={handleTextChange} placeholder='modele' />
                                    <label htmlFor="floatingInput">modele</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="prix" id="prix_Logement" value={formData.prix} onChange={handleTextChange} placeholder='prix' />
                                    <label htmlFor="floatingInput">prix</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name="disponible" id="disponible_Logement" value={formData.disponible} onChange={handleTextChange} placeholder='disponible' />
                                    <label htmlFor="floatingInput">disponible</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="file" className="form-control" name="photos" id="photos_Logement" multiple onChange={handleFileChange} placeholder='photo' />
                                    <label htmlFor="floatingInput">photos</label>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                    <button type="submit" className="btn btn-primary">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
