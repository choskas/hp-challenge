import React, { useState, useContext } from "react";
import Form from "./components/Form";
import { onLogin } from "../../api/apiFunctions";
import { UserContext } from "../../context/UserContext";
import { ToastContainer } from "react-toastr";
import isEmpty from "lodash/isEmpty";

const Login = (props) => {
  let container;
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div>
      {isError && (
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Caput draconis! is not the password anymore</strong> {errorMessage}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <Form
        setEmail={setEmail}
        setPassword={setPassword}
        onClickSubmit={async () => {
          try {
            const response = await onLogin(email, password);
            if (isEmpty(response) === false) {
              const { name, house, staff } = response.data;
              user.setName(name);
              user.setHouse(house);
              user.setStaff(staff);
              if (staff === true) {
                user.setImg(
                  "https://files.mormonsud.org/wp-content/uploads/2019/05/severus-snape.jpg"
                );
                window.sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    name,
                    house,
                    staff,
                    img:
                      "https://files.mormonsud.org/wp-content/uploads/2019/05/severus-snape.jpg",
                  })
                );
              } else {
                user.setImg(
                  "https://tiempodigital.mx/wp-content/uploads/2020/07/harry-potter.jpeg"
                );
                window.sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    name,
                    house,
                    staff,
                    img:
                      "https://tiempodigital.mx/wp-content/uploads/2020/07/harry-potter.jpeg",
                  })
                );
              }
              props.history.push("/data-base");
            }
          } catch (err) {
            // mensaje de erorr en err
            setErrorMessage(err)
            setIsError(true);
            setTimeout(() => {
              setIsError(false);
            }, 4000);
          }
        }}
      />
    </div>
  );
};

export default Login;
