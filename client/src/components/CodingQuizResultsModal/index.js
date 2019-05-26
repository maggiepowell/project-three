import React from "react";
import Modal from 'react-responsive-modal';
import "./style.css"
 
class CodingQuizResultsModal extends React.Component {
    
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

    if (this.props.correct < 10) {
        return (
            <div>
            <Modal 
                modalId="resultsModal"
                open={open}
                onClose={this.onCloseModal} 
                center={false}
                showCloseIcon={false}
                closeOnOverlayClick={false}
            >
                <p className="results-text">You scored {this.props.correct}</p>
                <button className="results-button" onClick={this.handleClick}>Play Again</button>
            </Modal>
            </div>
        );
    }
    
    else {
        return (
            <div>
                <Modal 
                modalId="resultsModal"
                open={open}
                onClose={this.onCloseModal} 
                center={false}
                showCloseIcon={false}
                closeOnOverlayClick={false}
            >
                <p className="results-text">You scored {this.props.correct}.  This is the highest score possible</p>
                <p>Here is your badge: </p>
                <button className="results-button" onClick={this.handleClick}>Play Again</button>
            </Modal>
            </div>
            
        );
    }
  }
}

export default CodingQuizResultsModal;