import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Dictionary from './Pages/Dictionary';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dictionary" element={<Dictionary />} />
      </Routes>
    </Router>
  );
}

export default App;

