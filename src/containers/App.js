//import React from 'react'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalRoot from './ModalRoot1';
import { showModal, hideModal } from '../actions/index.js'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

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
     this.openAlertModal = this.openAlertModal.bind(this);
   }

   closeModal(event) {
      this.props.hideModal();
    }

  openAlertModal(event) {
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
        </header>
        <div className="container">
          <div className="col">
             <button
               className="btn btn-outline-primary btn-block"
               onClick={this.openAlertModal}
             >Shopping Cart</button>
          </div>
          <div>
            <ProductsContainer />
            <ModalRoot />
          </div>
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
