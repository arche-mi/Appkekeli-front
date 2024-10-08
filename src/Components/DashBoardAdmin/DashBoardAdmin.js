import React, { Component } from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'

export default class DashBoardAdmin extends Component {
    //  location = useLocation()
     
    //  { prenom, type } = location.state
  render() {
    return (
      <div>
        <header>
        <h1><i className="fas fa-tachometer-alt"></i> Tableau de Bord</h1>
        <div className=''>
        <button className="edit"><i className="fas fa-sign-out-alt"></i> Aller à l'acceuil</button>
        <button id="logout"><i className="fas fa-sign-out-alt"></i> Se déconnecter</button>
        </div>
    </header>
    
    <div className="container">
        <aside className="sidebar">
            <ul>
                <li><a href="#"><i className="fas fa-user-cog"></i> Gérer les comptes</a></li>
                <hr/>
                <li><a href="#"><i className="fas fa-file-signature"></i> Gérer les demandes d'inscription des prestataires</a></li>
                <hr/>
                <li><a href="#"><i className="fas fa-car"></i> Gérer les véhicules</a></li>
                <hr/>
                <li><a href="#"><i className="fas fa-home"></i> Gérer les résidences</a></li>
                <hr/>
                
                <li><a href="#"><i className="fas fa-users"></i> Consulter les statistiques</a></li>
                <hr/>
                <li><a href="#"><i className="fas fa-cogs"></i> Gérer les avis</a></li>
            </ul>
        </aside>

        <main className="dashboard">
            <section className="card">
                <h2><i className="fas fa-car-side"></i> Véhicules</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Numéro</th>
                            <th>Nom</th>
                            <th>Modèle</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>AKA</td>
                            <td>3 Chambres, Salon</td>
                            <td>
                                <button className="view"><i className="fas fa-eye"></i> Consulter</button>
                                <button className="edit"><i className="fas fa-edit"></i> Editer</button>
                                <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section className="card">
                <h2><i className="fas fa-building"></i> Résidences</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Numéro</th>
                            <th>Prénom</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>A</td>
                            <td>Logement en prestation</td>
                            <td>
                                <button className="view"><i className="fas fa-eye"></i> Consulter</button>
                                <button className="edit"><i className="fas fa-edit"></i> Editer</button>
                                <button className="delete"><i className="fas fa-trash-alt"></i> Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>
    
    <footer className='foot-dashboard'>
        <p>&copy; 2024 - Admin Dashboard</p>
    </footer>
      </div>
    )
  }
}
