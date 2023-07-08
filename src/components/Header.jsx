import React, { useState, useRef, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: eidde_606@yahoo.com",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/eddie-nazario-20b2a320a",
  },
  {
    icon: faGithub,
    url: "https://github.com/eidde606?tab=repositories",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);

      if (headerRef.current) {
        headerRef.current.style.transform = visible
          ? "translateY(0)"
          : "translateY(-200px)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex="999"
      transition="transform 0.3s ease"
      transform="translateY(0)"
    >
      <Box color="white" maxWidth="2000px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link to="/">Home</Link>
              <Link to="/projects-section">Projects</Link>
              <Link to="/contactme-section">Contact</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
