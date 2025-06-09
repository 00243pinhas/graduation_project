import './App.css';
import Home from "../src/components/home.jsx"
import MatchingImage from "../src/components/matching-images";
import ReportForm from "../src/components/reports-items.jsx";
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportForm />} />
      <Route path="/match" element={<MatchingImage />} />
    </Routes>
  );
}

export default App;
