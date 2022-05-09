import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/HomePage/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import NavigationBar from './Pages/Shared/Navbar/NavigationBar';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div >
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
