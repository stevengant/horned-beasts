import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  handleHearts = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  }

  render() {
    return(
      <>
      <Card style={{width: '20rem'}}>

        <h2>{this.props.title}</h2>
        <p>❤️ {this.state.favorites} Favorites</p>
        <Image onClick={this.handleHearts} title={this.props.title} src={this.props.image_url} alt={this.props.altText} />
        <p>{this.props.description}</p>
        <Button onClick={this.handleHearts}>Give Hearts</Button>

      </Card>
      </>
    );
  }
}

export default HornedBeast;