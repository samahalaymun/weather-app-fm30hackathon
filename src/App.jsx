import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <Router basename="/weather-app-fm30hackathon">
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
