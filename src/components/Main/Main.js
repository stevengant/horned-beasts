import React from "react";
import data from '../../data/data.json';
import HornedBeast from "../HornedBeast/HornedBeast";
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <>
      <main>
        {data.map((beast) => {
          return <HornedBeast title={beast.title} image_url={beast.image_url} description={beast.description} key={beast._id}/>
        })}

      </main>
      </>
    );
  }

}

export default Main;