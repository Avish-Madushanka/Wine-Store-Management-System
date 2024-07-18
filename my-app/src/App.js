import Login from './pages/Login';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          </Routes>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
