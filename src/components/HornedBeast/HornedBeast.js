import React from "react";
import './HornedBeast.css';
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';



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
    this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)
  }

  render() {
    return (
      <>
        <Col className="mt-4">
          <Card className="h-100">
            <Card.Title >
              {this.props.title}
            </Card.Title>
            <Card.Text>
              ❤️ {this.state.favorites} Favorites
            </Card.Text>
            <Card.Img variant="top"
              style={{ height: '260px' }}
              onClick={this.handleHearts}
              title={this.props.title}
              src={this.props.image_url}
              alt={this.props.altText}
              horns={this.props.horns}
            />
            <Card.Text>
              {this.props.description}
              <br/>
              {this.props.horns}
            </Card.Text>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;