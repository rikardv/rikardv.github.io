import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import UnityLogo from "./Assets/unity.png";
import ReactLogo from "./Assets/logo.png";
import Arrow from "./Assets/arrow.png";
import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isClicked: !state.isClicked,
    }));
  }

  render() {
    Aos.init({
      duration: 3000,
    });
    return (
      <div className="Container">
        <div className="HeadInfo">
          <div className="About">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
          </div>
          <div className="Contact">
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="Left">
          <div className="Name">
            <h1>RIKARD VESTERGAARD</h1>
          </div>

          <div className="MyInfo">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>

          <div className="LeftTitle">
            <div style={{ height: "100%", width: "40%" }}>Mina projekt</div>

            <img className="Arrow" src={Arrow} alt="Logo"></img>
          </div>
        </div>

        <div className="Right">
          <div className="RightTitle">Titel</div>
          <div className="Grids">
            <div className="Boxes" style={{ backgroundColor: "#FF937B" }}>
              <div className="BoxContent" onClick={this.handleClick}>
                {" "}
                {this.state.isClicked
                  ? "Display new text here"
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "}
              </div>
            </div>
            <div className="Boxes" style={{ backgroundColor: "#757575" }}>
              <div className="BoxContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </div>
            </div>
          </div>
        </div>

        <div className="Bottom">
          <div className="PopUp">
            <div className="LeftSlide" data-aos="fade-right">
              <img src={ReactLogo} alt="Logo"></img>
            </div>
            <div className="RightSlide" data-aos="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>
          </div>

          <div className="PopUp">
            <div className="LeftSlide" data-aos="fade-right">
              <img src={UnityLogo} alt="logo" style={{ width: "80px" }}></img>
            </div>

            <div className="RightSlide" data-aos="fade-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
