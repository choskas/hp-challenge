import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Login from "./views/Login/Login";
import NavBar from "./views/NavBar/NavBar";
import StaffView from './views/StaffView';
import { UserProvider } from "./context/UserContext";
import {DetailProvider} from './context/DetailContext';
import "./App.css";
import StudentView from "./views/StudentView";
import PersonDetail from "./views/StudentDetail";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/student" component={StudentView} />
        <DetailProvider>
        <Route exact path="/staff" component={StaffView} />
        <Route exact path='/staff/:name' component={PersonDetail} />
        </DetailProvider>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
