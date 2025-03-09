import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About', path: '/about' },
  ];

  const sections = [
    {
      title: 'Section 1',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Features', href: '/features' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'FAQs', href: '/faqs' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Section 2',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Features', href: '/features' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'FAQs', href: '/faqs' },
        { text: 'About', href: '/about' },  
      ],
    },
    // Add more sections as needed
  ];
  
  const socialLinks = [
    { text: 'Twitter', href: '#twitter' },
    { text: 'Instagram', href: '#instagram' },
    { text: 'Facebook', href: '#facebook' },
  ];

  return (
    <Router>
      <NavBar
        brandName="My Brand"
        imageSrc="/vite.svg"
        navItems={navItems}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
      </Routes>      
      <Footer
        sections={sections}
        newsletterText="Monthly digest of what's new and exciting from us."
        companyInfo="Chattha, Inc."
        socialLinks={socialLinks}
      />
    </Router>
    
  );
}

export default App;
