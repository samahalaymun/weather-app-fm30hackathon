import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
