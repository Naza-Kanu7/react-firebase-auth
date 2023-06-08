import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Login from './components/Login';
import Signup from './components/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route 
                  path='/home' 
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  } 
                />
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
