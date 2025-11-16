import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Audits from './pages/Audits';
import Findings from './pages/Findings';
import Risks from './pages/Risks';
import Documents from './pages/Documents';
import Comments from './pages/Comments';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/audits">Audits</Link></li>
            <li><Link to="/findings">Findings</Link></li>
            <li><Link to="/risks">Risks</Link></li>
            <li><Link to="/documents">Documents</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/audits" element={<Audits />} />
            <Route path="/findings" element={<Findings />} />
            <Route path="/risks" element={<Risks />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
