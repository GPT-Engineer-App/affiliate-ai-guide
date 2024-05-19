import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Tools from "./pages/Tools.jsx";
import LearningResources from "./pages/LearningResources.jsx";
import Blog from "./pages/Blog.jsx";
import SubmitTools from "./pages/SubmitTools.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/tools" element={<Tools />} />
          <Route exact path="/learning-resources" element={<LearningResources />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/submit-tools" element={<SubmitTools />} />
          <Route exact path="/newsletter" element={<Newsletter />} />
          <Route exact path="/terms-of-service" element={<TermsOfService />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;