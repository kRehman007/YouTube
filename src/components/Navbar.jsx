import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import utube from '../../public/Logo.jpg'
import Profile from '../../public/Clogo.jpg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { IoArrowBack } from "react-icons/io5";


const Navbar = () => {
  const {setVisible,visible,setNav,nav}=useAuth()
  const [searchbar,setSearchbar]=useState(false)
  const [searchQuery,setSearchQuery]=useState('')
  const navigate=useNavigate();
  
  function searchQueryHandler(e){
   if((e?.key==='Enter' || e==='searchButton') && searchQuery?.length>0){
    navigate(`search/${searchQuery}`);
    setSearchQuery('')
  }
}
function handlee(){
  setVisible(true) 
}
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 800) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // Initial check
  handleResize();
  // Add event listener
  window.addEventListener('resize', handleResize);
  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [setNav]);

  if(searchbar){
    return(
      <div className='flex stickey top-0 bg-white justify-between px-6 py-2 items-center'>
        <IoArrowBack className='cursor-pointer' size={20} onClick={()=> setSearchbar(!searchbar)} />
      <div className='flex-grow ml-4 mr-2  flex items-center' >
     <div className='w-[100%] border rounded-l-full px-3 py-2 border-gray-400'>
      <input type='text' placeholder='Search' className='outline-none'
      value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler}
      /></div>
     <button className='px-4 py-2 border rounded-r-full bg-gray-100 border-gray-400'
     onClick={()=>searchQueryHandler('searchButton')}>
      <CiSearch size={'24px'} /></button>
      </div>
      <IoMdMic size={'42px'} className='ml-3 px-1 border rounded-full hover:bg-gray-200 duration-200' />
      </div>
    )
  }

  return (
    <div className='flex stickey top-0 bg-white justify-between px-6 py-2'>
      <div className=' flex items-center cursor-pointer space-x-1'>
      {!nav && 
      <IoMdMenu className='text-xl' onClick={handlee} /> }
      <img onClick={()=>navigate('/')} src={utube} alt='' className='w-28 h-7 px-3' />
      </div>
      <div className='w-[45%] flex items-center hidden sm:hidden lg:flex xl:flex md:flex' >
     <div className='w-[100%] border rounded-l-full px-3 py-2 border-gray-400'>
      <input type='text' placeholder='Search' className='outline-none'
      value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler}
      /></div>
     <button className='px-4 py-2 border rounded-r-full bg-gray-100 border-gray-400'
     onClick={()=>searchQueryHandler('searchButton')}>
      <CiSearch className='cursor-pointer' size={'24px'} /></button>
     <IoMdMic size={'42px'} className='ml-3 px-1 border rounded-full hover:bg-gray-200 duration-200' />
      </div>
      <div className='flex space-x-5 items-center'>
        <CiSearch className='text-2xl md:hidden lg:hidden xl:hidden' onClick={e => setSearchbar(!searchbar)} />
      <RiVideoAddLine className='text-2xl' />
      <AiOutlineBell  className='text-2xl'/>
      <Avatar src={Profile} size='62' round={true}/>

      </div>
    </div>
  )
}

export default Navbar
