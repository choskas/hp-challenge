import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Login from "./views/Login/Login";
import NavBar from "./views/NavBar/NavBar";
import AllPersonsData from './views/AllPersonsData';
import { UserProvider } from "./context/UserContext";
import {DetailProvider} from './context/DetailContext';
import "./App.css";
import PersonDetail from "./views/PersonDetail";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Login} />
        <DetailProvider>
        <Route exact path="/data-base" component={AllPersonsData} />
        <Route exact path='/data-base/:name' component={PersonDetail} />
        </DetailProvider>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
