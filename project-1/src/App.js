import logo from './assets/logo.svg';
import './css/App.css';
import { Button, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

const theme = extendTheme({
  colors: 
  {
    brand: 
    {
      // "#5B7EAB"
      primaryBlue: "#000000", 
      highlightGold: "#EBB246",
      secondaryWhite: "#EBB246",
      // "#C4BFAF"
      darkerWhite: "#FFFFFF",
    },
  },
  components: 
  {
    Button: 
    {
      variants: 
      {
        navbar: 
        {
          width: "150px",
          height: "50px",
          bg: "white",
          color: "black",
          fontSize: "1.3rem",
          textAlign: "start",
          borderRadius: "20px",
          border: "1px solid black",
          m: "4",
          _hover: 
          {
            color:"white",
            bg: "brand.highlightGold",
          },
          _active: 
          {
            bg: "brand.highlightGold",
          },
        },
      },
    },
  },
})

function App() {
  return (
    <div className="App">
        <ChakraProvider theme={theme}>
          <Routes> {/* Add routes to pages below */}
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />}/>
            <Route path='/team' element={<OurTeam />}/>
            <Route path='/faqs' element={<FAQ />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </ChakraProvider>
    </div>
  );
}

export default App;
