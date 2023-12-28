import logo from './logo.svg';
import './App.css';
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import MainPage from './component/mainPage';
import Student from './component/Student';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu></Menu>
          {/* Wrap Routes around Route */}
          <Routes>
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
