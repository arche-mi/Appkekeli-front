import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import SecondPage from './Components/SecondPage.js';
import Inscription from './Components/Insrciption.js'
import Connexion from './Components/Connexion.js';
import Profile from './Components/Profile.js';
import PanierPage from './Components/PanierPage.js';
import DashBoardAdmin from './Components/DashBoardAdmin/DashBoardAdmin.js'
import InitialFocus from './Components/FormInfosReservation/FormInfosReservationSite.js';
import FormInfosReservationSite from './Components/FormInfosReservation/FormInfosReservationSite.js';
import FormInfosReservationRestaurant from './Components/FormInfosReservation/FormInfosReservationRestaurant.js';
import FormInfosReservationLogement from './Components/FormInfosReservation/FormInfosReservationLogement.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Panier" element={<PanierPage />} />
            <Route path="/Villes/:id" element={<SecondPage />} />
            <Route path="/Villes/reservation_site" element={<FormInfosReservationSite/>} />
            <Route path="/Villes/reservation_restaurant" element={<FormInfosReservationRestaurant/>} />
            <Route path="/Villes/reservation_logement" element={<FormInfosReservationLogement/>} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Connexion/" element={<Connexion />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/DashBoard/" element={<DashBoardAdmin />} />
          </Routes>
        </Router>


      </div>
    );
  }

}


export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. kekeli 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


