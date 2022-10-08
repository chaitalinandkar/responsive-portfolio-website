import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/App.css';
import ContactPage from './ContactPage';
import ServicePage from './ServicePage'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='servicePage' element={<ServicePage />} />
        </Routes>
        <Routes>
          <Route path='contactPage' element={<ContactPage />} />
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;

