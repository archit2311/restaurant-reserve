import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import { Header, Menu , Reservation,Contactus,Lunch,Dinner} from './Attributes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >      
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/Restaurant-Reservation-System" element={<Header/>} />
     <Route  path="/Contactus" element={<Contactus/>} />
     <Route  path="/Menu" element={<Menu/>} />
     <Route  path="/booknow" element={<Reservation/>} />
     <Route  path="/lunch" element={<Lunch/>} />
     <Route  path="/dinner" element={<Dinner/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
