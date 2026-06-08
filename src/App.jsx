import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;