import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import CoursePage from "./Components/CoursePage";
import ElectivesPage from "./Components/ElectivesPage";
import SubjectPage from "./Components/SubjectPage";
import Roadmap from "./Components/Roadmap";
import Roadmaps from "./Components/Roadmaps";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(props) => <HomePage />} />
          <Route exact path='/courses' render={(props) => <CoursePage />} />
          <Route
            exact
            path='/electives'
            render={(props) => <ElectivesPage />}
          />
          <Route
            exact
            path='/subject/:id'
            render={(props) => <SubjectPage {...props} />}
          />
          <Route
            exact
            path='/roadmap/:id'
            render={(props) => <Roadmap {...props} />}
          />
          <Route
            exact
            path='/roadmaps'
            render={(props) => <Roadmaps {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
