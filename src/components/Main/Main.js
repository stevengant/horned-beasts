import React from "react";
import HornedBeast from "../HornedBeast/HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import './Main.css';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: this.props.data,
    }
  }

  handleSelect = (event) => {
    let selected = event.target.value;

    if(selected === '1')
    {
      let newData = this.props.data.filter(num => num.horns === 1);
      this.setState({
        sortedData: newData
      });
    }
    if(selected === '2')
    {
      let newData = this.props.data.filter(num => num.horns === 2);
      this.setState({
        sortedData: newData
      });
    }
    if(selected === '3')
    {
      let newData = this.props.data.filter(num => num.horns === 3);
      this.setState({
        sortedData: newData
      });
    }
    if(selected === '>3')
    {
      let newData = this.props.data.filter(num => num.horns === 100);
      this.setState({
        sortedData: newData
      });
    } else if(selected === 'All')  {
      this.setState({
        sortedData: this.props.data
      });
    }
  }



  render() {
    return (
      <>
        <main>
          {/* <ListGroup>
            {this.state.sortedData.map((num, idx) => {
              return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
            })}
          </ListGroup> */}
          <Form>
            <Form.Group>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option>Filter by Number of Horns</option>
                <option value="All">All</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value=">3">More Than Three Horns</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
              {this.state.sortedData.map((beast) => {
                return (
                  <HornedBeast
                    title={beast.title}
                    image_url={beast.image_url}
                    description={beast.description}
                    horns={beast.horns}
                    key={beast._id}
                    handleOpenModal={this.props.handleOpenModal}
                  />
                )
              })}
            </Row>
          </Container>

        </main>
      </>
    );
  }

}

export default Main;