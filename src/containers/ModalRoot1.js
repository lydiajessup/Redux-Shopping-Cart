import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';


const mapStateToProps = state => ({
  ...state.modal,

})


class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Your Cart</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Cart</div>



        </ReactModal>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ModalContainer)
