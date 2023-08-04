//import logo from './logo.svg';
import './App.css';
//import ReactDOM from "react-dom/client";
import { Routes,Route,}from 'react-router-dom'
import Home from './Components/Home.js'


//import './Components/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MomBaby from './Components/MomBaby';
import Fragrance from './Components/Fragrance';
import Man from './Components/Man';
import HealthWellness from './Components/HealthWellness';
import Appliances from './Components/Appliances';
import Hair from './Components/Hair';
import Makeup from './Components/Makeup';
import Skin from './Components/Skin';
import BodyBath from './Components/BodyBath';
import Natural from './Components/Natural';
import Nopage from './Components/Nopage';



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      
     
     <Routes>
       <Route path='/' element={<Home/>}/> 
        <Route path='/makeup' element={<Makeup/>}/>
        <Route path='*' element={<Nopage/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/bodybath' element={<BodyBath/>}/>
        <Route path='/appliances' element={<Appliances/>}/>
        <Route path='/fragrance' element={<Fragrance/>}/>
        <Route path='/healthwellness' element={<HealthWellness/>}/>
        <Route path='/man' element={<Man/>}/>
        <Route path='/mombaby' element={<MomBaby/>}/>
        <Route path='/natural' element={<Natural/>}/>
        <Route path='/skin' element={<Skin/>}/>
       
      </Routes>
     
      
      
    </div>
  );
}

export default App;
