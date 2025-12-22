import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Carousel from './components/gallery/Carousel';
import IbrahimPortfolio from './pages/ibrahim-portfolio';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="*" element={<NotFound />} /> */}
  
    </Routes>
  );
}

export default App;
