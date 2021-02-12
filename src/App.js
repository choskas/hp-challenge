import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import NavBar from "./views/NavBar/NavBar";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Route path="/" component={Login} />
      </UserProvider>
    </Router>
  );
}

export default App;
