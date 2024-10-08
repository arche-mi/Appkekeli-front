import React, { Component } from 'react'
import './style.css'

export default class DashBoardPrestataire extends Component {
  render() {
    return (
      <div>
        <header>
        <h1><i class="fas fa-tachometer-alt"></i> Tableau de Bord</h1>
        <div className=''>
        <button class="edit"><i class="fas fa-sign-out-alt"></i> Aller à l'acceuil</button>
        <button id="logout"><i class="fas fa-sign-out-alt"></i> Se déconnecter</button>
        </div>
    </header>
    
    <div class="container">
        <aside class="sidebar">
            <ul>
              
                <li><a href="#"><i class="fas fa-car"></i> Gérer les véhicules</a></li>
                <hr/>
                <li><a href="#"><i class="fas fa-home"></i> Gérer les résidences</a></li>
                <hr/>
                
                <li><a href="#"><i class="fas fa-users"></i> Consulter les statistiques</a></li>
                <hr/>
                
            </ul>
        </aside>

        <main class="dashboard">
            <section class="card">
                <h2><i class="fas fa-car-side"></i> Véhicules</h2>
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
                                <button class="view"><i class="fas fa-eye"></i> Consulter</button>
                                <button class="edit"><i class="fas fa-edit"></i> Editer</button>
                                <button class="delete"><i class="fas fa-trash-alt"></i> Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section class="card">
                <h2><i class="fas fa-building"></i> Résidences</h2>
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
                                <button class="view"><i class="fas fa-eye"></i> Consulter</button>
                                <button class="edit"><i class="fas fa-edit"></i> Editer</button>
                                <button class="delete"><i class="fas fa-trash-alt"></i> Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    </div>
    
    <footer>
        <p>&copy; 2024 - prestataire Dashboard</p>
    </footer>
      </div>
    )
  }
}
