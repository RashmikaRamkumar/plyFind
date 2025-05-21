import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EstimatorPage from "./pages/EstimatorPage";
import RequestQuotePage from "./pages/RequestQuotePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<EstimatorPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
