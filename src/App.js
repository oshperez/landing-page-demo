import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Header from "sections/Header/Header";
import Hero from "sections/Hero/Hero";
import Services from "sections/Services/Services";
import About from "sections/About/About";
import Contact from "sections/Contact/Contact";
import Footer from "sections/Footer/Footer";
import Box from "components/Box/Box.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box>
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
