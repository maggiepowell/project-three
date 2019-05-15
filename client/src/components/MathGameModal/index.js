import React from "react";
import Modal from 'react-responsive-modal';
import "./style.css"
 
class MathGameModal extends React.Component {
    
  state = {
    open: true,
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
    const { open } = this.state;
    return (
      <div>
        <Modal 
            modalId="modal"
            open={open} 
            onClose={this.onCloseModal} 
            center={false}
            showCloseIcon={false}
            closeOnOverlayClick={false}
        
        >
          <h2>Instructions Here</h2>
          <button onClick={this.handleClick}>Start Game</button>
        </Modal>
      </div>
    );
  }
}

export default MathGameModal;
 