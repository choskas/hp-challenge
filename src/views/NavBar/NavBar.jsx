import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuidditch } from "@fortawesome/free-solid-svg-icons";
import {withRouter} from 'react-router'
import isEmpty from "lodash/isEmpty";

const NavBar = (props) => {
  const user = useContext(UserContext);;
  const { history } = props;

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            src="Hogwarts-Logo.png"
            alt=""
            width="90"
            height="90"
            className="d-inline-block align-top"
          />
          <h3>Hogwarts</h3>
        </div>
        {isEmpty(user.name) === false && (
          <div className="user-container-navbar">
            <div id="user-img">
              <img src={user.img} alt="no-img" />
              <FontAwesomeIcon
              title="Logout"
              onClick={() => {
                user.setName("");
                user.setImg("");
                user.setStaff(false);
                user.setHouse("");
                history.push("/");
              }}
              id="logout-icon"
              icon={faQuidditch}
            />
            </div>
            <h4>{user.name}</h4>
          </div>
        )}
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
