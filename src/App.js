import React from 'react';
import IssueList from './components/IssueList'
import './components/issues.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="row">
      <IssueList></IssueList>
    </div>
  );
}

export default App;
