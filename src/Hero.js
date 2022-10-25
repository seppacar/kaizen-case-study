import React, { Component } from "react";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <button className="BackButton"></button>
        <div className="Box">
          <img className="SplashImage" src={this.props.splash} alt=""></img>
        </div>
        <img className="BrandLogo" src={this.props.brandimg} alt=""></img>
        <div className="DayCountdown">
          <p>{this.props.countdown}</p>
        </div>
      </div>
    );
  }
}
