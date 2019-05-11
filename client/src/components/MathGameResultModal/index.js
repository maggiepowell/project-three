import React from "react";
import Modal from 'react-responsive-modal';
import "./style.css"
 
class MathGameResultModal extends React.Component {
    
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


  handleClick = () => {
      this.onCloseModal();
      this.props.onClick();
      console.log("clicked!");
  }
 
  render() {
    return (
      <div>
        <Modal 
            modalId="modal"
            onClose={this.onCloseModal} 
            open={false}
            center={false}
            showCloseIcon={false}
            closeOnOverlayClick={false}
        >
          <h2>Time's up!</h2>
          <p>You Scored (number)</p>
          <button onClick={this.handleClick}>Play Again</button>
        </Modal>
      </div>
    );
  }
}

export default MathGameResultModal;
 