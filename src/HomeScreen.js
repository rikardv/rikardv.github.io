import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import UnityLogo from "./Assets/unity.png";
import Arrow from "./Assets/arrow.png";
import Man from "./Assets/man.png";
import Contact from "./Contact.js";
import axios from "axios";
import IphoneSlide from "./Assets/pag3.png";
import FacebookImg from "./Assets/fcbk.png";
import LegoImage from "./Assets/lsd.svg";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, quoteItem: "", authorItem: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  getQuoteData() {
    axios
      .get("http://quotes.stormconsultancy.co.uk/random.json", {})
      .then((res) => {
        const Items = res.data;

        this.setState({ quoteItem: Items.quote, authorItem: Items.author });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getQuoteData();
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
        <div className="Left">
          <div className="Name">
            RIKARD <br></br>VESTERGAARD
          </div>

          <div className="MyInfo" data-Aos="fade-right">
            <div className="PersonalInfo">
              Student i Norrköping. Civilingenjör i Medieteknik. Intresserad av
              <span className="breadText"> teknik och design.</span>
            </div>
            <div className="QuoteContainer">
              My motto
              <br></br>
              <span className="quoteText">
                <span className="breadText">while</span>(noSuccess)<br></br>
                {"{"}
                <br></br>
                <span style={{marginLeft: '2vw'}}>tryAgain();</span><br></br>
                <br></br><span className="breadText" style={{marginLeft: '2vw'}}>if</span>(Dead)<br></br>
                
                <span className="breadText" style={{marginLeft: '3vw'}}>break;</span><br></br>
                {"}"}
              </span>
              
              <br></br>
              
              
            </div>
          </div>

          <div className="LeftTitle">
            <div className="ProjectTitle">
              Scrolla ned och se mina projekt{" "}
              <img className="Arrow" src={Arrow} alt="Logo"></img>
            </div>
          </div>
        </div>

        <div className="Right">
          <div className="RightTitle"></div>
          <div className="Grids">
            {this.state.isClicked ? (
              <div className="Form">
                <div className="ExitButton" onClick={this.handleClick}>
                  X
                </div>
                <Contact></Contact>
              </div>
            ) : (
              <div className="ContactText">
                <div className="InnerText" onClick={this.handleClick}>
                  Kontaka mig
                </div>
                <div className="InnerTextFacebook">
                  <a
                    href="https://www.facebook.com/rikardv98/"
                    className="breadText"
                  >
                    <img src={FacebookImg}></img>
                  </a>
                </div>

                <img src={Man}></img>
              </div>
            )}
          </div>
        </div>

        <div className="BottomContainer">
          <div className="BottomFirst">
            <div className="PopUp">
              <div className="LeftSlide" data-aos="fade-right">
                <img src={IphoneSlide} alt="Logo"></img>
              </div>
              <div className="RightSlide" data-aos="fade-left">
                I samband med kursen Kommunikation och Användargränssnitt
                utvecklades en app-prototyp för Arbetets Museum i React Native.
                Detta för att underlätta för besökare att navigera och läsa om
                utställningarna som finns.{" "}
              </div>
            </div>
          </div>

          <div className="Bottom">
            <div className="PopUp">
              <div className="LeftSlide" data-aos="fade-right">
                <img src={UnityLogo} alt="logo" style={{ width: "80px" }}></img>
              </div>

              <div className="RightSlide" data-aos="fade-left">
                (Pågende projekt) Slumpmässigt genererad 3D stadsmiljö med ett
                kontrollerat trafiksystem baserat på AI.
              </div>
            </div>
          </div>

          <div className="Bottom">
            <div className="PopUp">
              <div className="LeftSlide" data-aos="fade-right">
                <img
                  src={LegoImage}
                  alt="logo"
                  style={{ width: "200px" }}
                ></img>
              </div>

              <div className="RightSlide" data-aos="fade-left">
                Presenterar legostatistik ur en SQL-databas. Allt från hur
                antalet set ökat per år till den mest använda legobiten. Klicka{" "}
                <span className="breadText" onClick>
                  {" "}
                  <a
                    href="http://www.student.itn.liu.se/~timmy449/om.php"
                    className="breadText"
                  >
                    här
                  </a>
                </span>{" "}
                för gå till sidan.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
