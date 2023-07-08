import { ChakraProvider } from "@chakra-ui/react";
import DashBoard from "./components/LandingSection";
import Navbar from "./components/Header";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMeSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/projects-section" element={<Projects />} />
            <Route path="/contactme-section" element={<ContactMe />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
