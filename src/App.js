import React from "react";
import "./App.css";
import Nav from "./Nav";

const navcont = [
  {
    name: "Home",
    ref: "http://www.gomycode.tn/"
  },
  {
    name: "Services",
    ref: "http://www.gomycode.tn/",
    drop: [
      {
        name: "For entrepreneurs",
        ref: "http://www.gomycode.tn/"
      },
      {
        name: "For student",
        ref: "http://www.gomycode.tn/"
      },
      {
        name: "For hobbyists",
        ref: "http://www.gomycode.tn/"
      }
    ]
  },
  {
    name: "Contact",
    ref: "http://www.gomycode.tn/"
  }
];
function App() {
  return (
    <div >
      <u className="nav-list">
      <Nav navcontent={navcont} />
      </u>
    </div>
  );
}

export default App;
