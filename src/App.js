import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import SecondPage from './Components/SecondPage.js';
import FormConnexion from './Components/FormConnexion/FormConnexion.js'
import FormLogin from './Components/FormLogin/FormLogin.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SecondPage/ville=abidjan" element={<SecondPage />} />
            <Route path="/SecondPage/FormConnexion" element={<FormConnexion />} />
            <Route path="/SecondPage/FormLogin" element={<FormLogin />} />
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


