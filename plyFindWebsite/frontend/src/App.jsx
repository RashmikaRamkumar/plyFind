import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import WhatsAppButton from './components/WhatsAppButton';
import { useState, useEffect } from 'react';
import { ChatbotInterface } from './components/ChatbotInterface';
import axios from 'axios';

axios.defaults.baseURL =  'https://plyfind-chatbot.onrender.com';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  // Backend health check
  useEffect(() => {
    const checkConnection = async () => {
      try {
        await axios.get('/health'); // You should have a /health endpoint in your backend
        setIsConnected(true);
      } catch (error) {
        console.warn('Backend connection failed, app may have limited functionality:', error);
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);
return (

  <BrowserRouter>
    <>
      <Routes>
        {/* Customer routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/contact" element={<Contact />} />
          <Route path="/admin/enquiry" element={<Enquiry />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      
<ChatbotInterface
/>
<WhatsAppButton isChatbotOpen={isChatbotOpen} />

      {/* <ChatbotInterface isConnected={isConnected} /> */}
    </>
  </BrowserRouter>
  );
};


export default App;