import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IssueList from './components/IssueList'
import IssueDetail from './components/IssueDetail'
import './components/issues.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <Router>
      <div className="row">
        <div className="col">
          <Switch>
            <Route exact path="/" component={IssueList} />
            <Route exact path="/issue/:issueNumber" component={IssueDetail} />
            <Route>
              <h1 className="text-center">Error: Something's Gone Wrong</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
