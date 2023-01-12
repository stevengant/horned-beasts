import React from "react";
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>{this.props.selectedBeast}</Modal.Header>
          <Modal.Body>
            <img 
              src={this.props.img_url} 
              alt={this.props.description} 
              width='90%' 
            />
            {this.props.description}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;