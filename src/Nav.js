import React from "react";
import "./App.css";
function Nav(props) {
  const Navcontainer = props.navcontent;
  let tableau = Navcontainer.map((element, i) => (
    <div>
      <li key={i} className="Servhover">
        <a className="items" href={element.ref}>
          {element.name}
        </a>
        {element.drop ? (
          <ul className="dropdown">
            {element.drop.map((el, j) => (
              <li key={j}>
                <a className="dropdown-items" href={el.ref}>
                  {el.name}
                </a>
              </li>
            ))}{" "}
          </ul>
        ) : null}
      </li>
    </div>
  ));

  return tableau;
}
export default Nav;
