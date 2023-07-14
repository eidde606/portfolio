import { ChakraProvider } from "@chakra-ui/react";
import Contacts from "./components/Contacts";
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
            <Route path="/contacts-section" element={<Contacts />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
