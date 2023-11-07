import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import Media from './pages/Media';
import About from './components/about'
import Onboard from './pages/Onboard';
import Nav from './components/nav'
// import Nav from './components/navbar'
import Footer from './components/footer';
import Flower from './components/flower'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div className='bg-[#556B2F]'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Onboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donation' element={<Donations/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/flower' element={<Flower/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
