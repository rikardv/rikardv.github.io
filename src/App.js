import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./HomeScreen.js";
import Contact from "./Contact.js";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={HomeScreen} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  );
}

export default App;
