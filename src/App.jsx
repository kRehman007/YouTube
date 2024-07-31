import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { useAuth } from './context/AuthProvider'


//Pages.....
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import Playingvideo from './components/Playingvideo'
import Loading from './Loader/Loading'


function App() {
  const {loading}=useAuth();
    return (
    <>
    {loading && <Loading />}
      <Navbar />
     <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/video/:id' element={<Playingvideo />} />
      </Routes> 
    </>
  )
}

export default App
