//import logo from './logo.svg';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
