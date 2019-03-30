//import React from 'react'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from './ModalRoot1';
import { showModal, hideModal } from '../actions/index.js'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import "../stylesheets/app-title.css"
import "../stylesheets/cart-button.css"
import "../stylesheets/button-div.css"


const MESSAGE = "A redux modal component.";

//add modal
const mapDispatchToProps = dispatch => ({
 hideModal: () => dispatch(hideModal()),
 showModal: (modalProps, modalType) => {
  dispatch(showModal({ modalProps, modalType }))
 }
})
//add modal

class App extends Component{

  constructor(props) {
     super(props)
     this.closeModal = this.closeModal.bind(this);
     this.openModal = this.openModal.bind(this);
   }

   closeModal(event) {
      this.props.hideModal();
    }

  openModal(event) {
    this.props.showModal({
     open: true,
     title: 'Alert Modal',
     message: MESSAGE,
     closeModal: this.closeModal
   }, 'alert')
   console.log("opened!");
  }

  render(){
    return(
      <div className="app">
        <header className="app-header">
           <h1 className="app-title">Acme Store</h1>
           <div className="button-div">
             <button className="cart-button"
               onClick={this.openModal}
             >Shopping Cart</button>
           </div>
        </header>
          <hr/>
          <div>
            <ProductsContainer />
            <ModalRoot />
          </div>
      </div>

    );
  }
}

export default connect(null, mapDispatchToProps)(App);

// const App = () => (
//   <div>
//     <h2>Acme Store</h2>
//
//     <button>Button</button>
//
//     <hr/>
//
//     <ProductsContainer />
//
//     <hr/>
//
//     <CartContainer />
//
//   </div>
//
//
// )

//export default App
