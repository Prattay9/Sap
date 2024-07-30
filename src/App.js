import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resgister from './pages/Resgister';
import About from './pages/About';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/register" element= {<Resgister/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
