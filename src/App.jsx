import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import Media from './pages/Media';
import About from './components/about'
import Onboard from './pages/Onboard';
import Nav from './components/nav'
import Footer from './components/footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <div className=''>
      <Nav/>
      <Routes>
        <Route path='/' element={<Onboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donation' element={<Donations/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
