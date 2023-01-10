import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast description="This is a majestic elk buck" title="Elk" imageUrl="https://media.istockphoto.com/id/1298146304/photo/bull-elk-in-the-rocky-mountains.jpg?s=612x612&w=0&k=20&c=aXwcAIajR4iuIfUMuHMPnlP15pIq0rCrLeUH_R7SjDA=" />
        
        <HornedBeast description="This is an antelope" title="Antelope" imageUrl="https://cdn.pixabay.com/photo/2022/10/08/20/37/impala-7507779__340.jpg" />
      </>
    );
  }

}

export default Main;