import logo from './assets/logo.svg';
import './css/App.css';
import { Button, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import OurWork from './pages/OurWork';

const theme = extendTheme({
  colors: 
  {
    brand: 
    {
      primaryBlue: "#5B7EAB",
      highlightGold: "#EBB246",
      secondaryWhite: "#F0EAD6",
      darkerWhite: "#C4BFAF",
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
          bg: "brand.secondaryWhite",
          color: "black",
          fontSize: "1.3rem",
          textAlign: "start",
          borderRadius: "20px",
          border: "1px solid black",
          m: "4",
          _hover: 
          {
            border: "1px solid white",
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
            <Route path='/contact' element={<Contact />}/>
            <Route path='/ourteam' element={<OurTeam />}/>
            <Route path='/ourwork' element={<OurWork />}/>
          </Routes>
        </ChakraProvider>
    </div>
  );
}

export default App;
