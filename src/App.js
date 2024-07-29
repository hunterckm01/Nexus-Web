import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Navbar from './Components/Navbar';
import { Route , Routes } from 'react-router-dom';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="">

      {/* NAVBAR SHOULD BE PRESENT IN EVERY SECTION */}
      <Navbar/>

      {/* Different Routes for navigating between the pages */}
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Contact" element = {<Contact/>}/>
        <Route path = "/Work" element = {<Work/>}/>
      </Routes>

      <FooterSection/>
    </div>
  );
}

export default App;
