
import './App.css';
import NavBar from './Component/Layouts/NavBar';
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import Sliders from './Component/Layouts/Sliders';

import SpotlightCard from '../src/components/SpotlightCard/SpotlightCard.jsx';
import CardGrid from './Component/Layouts/CardGrid.jsx';
import Footer from './Component/Layouts/Footer.jsx';
import Home from './Component/Pages/Home.jsx';




function App() {

  return (
    <ChakraProvider value={defaultSystem}>
    <div className="App">
      <Home />
      {/* <NavBar /> */}
      {/* <Sliders /> */}
    
     
     {/* <CardGrid/> */}
     {/* <Footer/> */}
    
 
      


     
      
      
    
    </div>
    </ChakraProvider>
  );
}

export default App;
