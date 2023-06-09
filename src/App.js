// import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar/Navbar';
import Carousal from './Components/Carousal/Carousal';
import { Divider } from '@chakra-ui/react'
import Footer from './Components/Footer/Footer';
import Tour from './Components/Tour/Tour';
import Tour_Package from './Components/Tour_Package/Tour_Package';
import Destination_prop from './Components/Destination_prop/Destination_prop.js';
import Destination from './Components/Destination/Destination';
import Service from './Components/Service_in/Service';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar/>
      <Carousal/>
      <Tour/>
      <Destination/>
      <Service/>
      <Footer/>
    </div>
    </ChakraProvider>
  );
}

export default App;
