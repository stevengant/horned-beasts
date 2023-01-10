import React from "react";

class HornedBeast extends React.Component {
  render() {
    return(
      <>
        <h2>{this.props.title}</h2>
        <img title={this.props.title} src={this.props.imageUrl} alt={this.props.altText} />
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;