import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
