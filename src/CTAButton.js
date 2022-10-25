import React, { Component } from "react";
import "./CTAButton.css";

export default class CTAButton extends Component {
  render() {
    return (
      <div className="Button">
        <p className="ButtonText">{this.props.text}</p>
      </div>
    );
  }
}
