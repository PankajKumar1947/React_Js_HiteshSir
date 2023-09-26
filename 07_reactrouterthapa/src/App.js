
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home';
import Contact from './Contact';
import About from './About'
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes> */}


      {/* Nested Routes */}
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* What abouot error page */}
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
