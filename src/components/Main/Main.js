import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import './Main.css';


class Main extends React.Component {

  render() {
    return (
      <>
        <main>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {this.props.data.map((beast) => {
                return <HornedBeast 
                  title={beast.title} 
                  image_url={beast.image_url} 
                  description={beast.description} 
                  key={beast._id}
                  handleOpenModal={this.props.handleOpenModal} 
                />
              })}
            </Row>
          </Container>

        </main>
      </>
    );
  }

}

export default Main;