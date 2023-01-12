import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import data from '../../data/data.json';
import SelectedBeast from '../Modal/SelectedBeast';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      imgUrl: '',
      description: '',
    }
  }

  handleOpenModal = (name, img, description) => {
    this.setState({
      showModal: true,
      selectedBeast: name,
      imgUrl: img,
      description: description,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal}/>
        <SelectedBeast 
          show={this.state.showModal} 
          onHide={this.handleCloseModal}
          img_url={this.state.imgUrl}
          description={this.state.description}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </>
    )
  }
}

export default App;
