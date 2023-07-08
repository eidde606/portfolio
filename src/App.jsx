import { ChakraProvider } from "@chakra-ui/react";
import ContactMe from "./components/ContactMeSection";
import Navbar from "./components/Header";
import DashBoard from "./components/LandingSection";
import Projects from "./components/Projects";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
