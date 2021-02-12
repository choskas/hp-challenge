import React, { useContext } from "react";
import { DetailContext } from "../../context/DetailContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const PersonDetail = (props) => {
  const person = useContext(DetailContext);
  return (
    <div className="card-detail-container">
       <FontAwesomeIcon onClick={()=>{props.history.push('/data-base')}} id="go-back-icon" icon={faArrowCircleLeft} />
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6" id="detail-image-container">
            <img src={person.image} alt="no-img" className="detail-image" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title">{person.name}</h4>
              <p className="card-text">House: {person.house}</p>
              <p className="card-text">Birth: {person.birth}</p>
              <p className="card-text">
                Wand:{" "}
                <ul className="list-group" id="wand-list">
                  <li className="list-group-item">Core: {person.wand.core}</li>
                  <li className="list-group-item">Length: {person.wand.length}</li>
                  <li className="list-group-item">Wood: {person.wand.wood}</li>
                </ul>
              </p>
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
