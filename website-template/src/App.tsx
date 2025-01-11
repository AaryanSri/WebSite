import NavBar from './Components/NavBar/NavBar';
import {Route, Routes} from 'react-router-dom';
import {  ContactMe } from './Components/Pages/ContactMe';
import {  Services } from './Components/Pages/Services';
import   { Gallery } from './Components/Pages/Gallery';
import {  Reviews } from './Components/Pages/Reviews';
import {  Home } from './Components/Pages/Home';


function App() {

  return <div>
  <Routes>
    <Route path='/contactme' element={<ContactMe />} />
    <Route path='/gallery' element= {<Gallery />} />
    <Route path='/reviews' element={<Reviews />} />
    <Route path='/services' element={<Services />} />
    <Route path='/' element={<Home />} />
  </Routes>
  </div>;
}

export default App;