import React, { Component } from 'react'
import Header from './Header/Header'
import Panier from './Panier/Panier'
import Footer from './Footer/Footer'
// import DashBoardAdmin from './DashBoardAdmin/DashBoardAdmin'

export default class PanierPage extends Component {
  
  render() {
    return (
      <div>
        <Header styles={{ display: "none" }}/>
        <Panier/>
        <Footer/>
        {/* <DashBoardAdmin/> */}
      </div>
    )
  }
}
