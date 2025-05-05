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

const App = () => (
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
      <WhatsAppButton />
    </>
  </BrowserRouter>
);

export default App;