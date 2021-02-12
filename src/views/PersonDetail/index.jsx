import React, { useContext, useEffect, useState } from "react";
import { DetailContext } from "../../context/DetailContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faTimesCircle,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const PersonDetail = (props) => {
  const [background, setBackground] = useState('Gryffindor-back')
  const person = useContext(DetailContext);
  useEffect(() => {
    setBackground(`${person.house}-back`)
  },[person])
  return (
    <div className="card-detail-container">
      <FontAwesomeIcon
        onClick={() => {
          props.history.push("/data-base");
        }}
        id="go-back-icon"
        icon={faArrowCircleLeft}
      />
      <div className={`card mb-3 ${background}`} id="card-container">
        <div className="row g-0">
          <div className="col-md-6" id="detail-image-container">
            <img src={person.image} alt="no-img" className="detail-image" />
          </div>
          <div className="col-md-2" />
          <div className="col-md-3">
            <div className="card-body">
              <h4 className="card-title">{person.name}</h4>
              <p className="card-text">
                House: {person.house}{" "}
                <img
                  id="house-img"
                  alt="no-img"
                  src={
                    person.house === "Gryffindor"
                      ? "https://encantoos.com/8423-large_default/alfombra-gryffindor-harry-potter.jpg"
                      : person.house === "Slytherin"
                      ? "https://www.dictionary.com/e/wp-content/uploads/2018/03/Slytherin-300x300.jpg"
                      : person.house === "Hufflepuff"
                      ? "https://www.koekoe.es/3574-tm_thickbox_default/chapa-escudo-hufflepuff-harry-potter.jpg"
                      : person.house === "Ravenclaw"
                      ? "https://www.monastore.com.mx/wp-content/uploads/2020/07/Parche-Escudo-Ravenclaw.png"
                      : null
                  }
                />{" "}
              </p>
              <p className="card-text">Birth: {person.birth}</p>
              <div className="card-text">
                Wand:{" "}
                <ul className="list-group" id="wand-list">
                  <li className="list-group-item">Core: {person.wand.core}</li>
                  <li className="list-group-item">
                    Length: {person.wand.length}
                  </li>
                  <li className="list-group-item">Wood: {person.wand.wood}</li>
                </ul>
              </div>
              <p className="card-text">Patronus: {person.patronus}</p>
              <p className="card-text">Blood: {person.bloodStatus}</p>
              <p className="card-text">
                Alive:{" "}
                {person.isAlive ? (
                  <FontAwesomeIcon id="alive" icon={faCheckCircle} />
                ) : (
                  <FontAwesomeIcon id="dead" icon={faTimesCircle} />
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
