import React, { useCallback, useEffect } from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight, FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { BiHistory } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { useAuth } from '../context/AuthProvider';
import { useRef } from 'react';
const Sidebar = () => {
    const ref=useRef();
    const {mobile,setMobile,visible,setVisible,first,setFirst}=useAuth();
    const sidebaritems=[
        { id:1,name:'Home',icon:<GoHome />},{id:2,name:'Shorts',icon:<SiYoutubeshorts />},
        {id:3,name:'Subscription',icon:<MdOutlineSubscriptions />}
    ]
    const sidebaritems2=[
        { id:1,name:'Your Channel',icon:<FaYoutube />},{id:2,name:'History',icon:<SiYoutubestudio />},
        {id:3,name:'Playlists',icon:<SiYoutubekids />},{id:4,name:'Your Videos',icon:<SiYoutubemusic/>},
        {id:5,name:'Watch later',icon:<SiTrendmicro/>},{id:6,name:'Liked Videos',icon:<HiOutlineShoppingBag/>}
    ]
    const sidebaritems3=[
        { id:1,name:'trending',icon:<SiYoutubekids />},{id:2,name:'Shoppig',icon:<HiOutlineShoppingBag />},
        {id:3,name:'Music',icon:<PiMusicNoteLight />},{id:4,name:'Films',icon:<PiFilmSlateLight/>},
        {id:5,name:'Gaming',icon:<SiYoutubegaming/>},{id:6,name:'News',icon:<FaRegNewspaper/>},
        {id:7,name:'Sports',icon:<TfiCup/>},{id:8,name:'Courses',icon:<SiStylelint/>},
        {id:9,name:'Fashion & Podcasts',icon:<MdPodcasts/>}
    ]
    const sidebaritems4=[
        { id:1,name:'Youtube Premium',icon:<CgMediaLive />},{id:2,name:'Youtube Music',icon:<SiYoutubemusic />},
        {id:3,name:'YouTube Kids',icon:<SiYoutubekids />}
    ]
    const sidebaritems5=[
        { id:1,name:'Setting',icon:<CiSettings />},{id:2,name:'Report Histoy',icon:<BiHistory />},
        {id:3,name:'Help',icon:<IoIosHelpCircleOutline />},{id:4,name:'Send Feedback',icon:<RiFeedbackLine/>}
    ]
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        // Set the initial state
        handleResize();
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Remove event listener on cleanup
        return () =>{
             window.removeEventListener('resize', handleResize);
             
        }
    }, [setMobile]);
    
    const handle=useCallback((event)=>{
        if(first){
            setFirst(false)
        }
        else{
            setVisible(false)
            setFirst(true)
        }
    },[first,setFirst])
    useEffect(()=>{
        document.addEventListener('click',handle)
        return ()=> document.removeEventListener('click',handle)
    },[handle])
    useEffect(() => {
        if (visible) {
            const div=document.createElement('div')
          div.style.width='100%'
          div.style.height='100vh'
          div.style.position = 'fixed';
          div.style.top = '0';
          div.style.left = '0';
          div.style.backgroundColor='rgba(211,211,211,.5)'
          div.style.zIndex='30'
          div.id='overlay'
          document.body.appendChild(div)
        }
        else{
            const exe=document.getElementById('overlay')
            if(exe){document.body.removeChild(exe)}      
              }
    }, [visible,setVisible]);

  return (
       <>
     {(!mobile || visible) && (
    <div ref={ref} className={`${visible?'px-3 w-[50%] h-screen absolute top-0 left-0 z-40 bg-white overflow-y-scroll scrollbar-none hover:scrollbar-thin':
    'px-3 w-[45%] h-[calc(100vh-6.625rem)] overflow-y-scroll scrollbar-none hover:scrollbar-thin'}`}>
              {/* Home.... */}
        <div className='space-y-3 items-center'>
            <h1 className='font-bold mt-2'>Home</h1>
    {sidebaritems.map((item)=>(
     <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 rounded-xl px-3 py-1'>
        <div className='text-xl cursor-pointer'>{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
    ))}
    </div>
    <br />
    <hr />
         {/* You.... */}
         <div className='mt-4 space-y-3 items-center'>
            <div className='flex items-center space-x-2'>
                <h1 className='font-bold'>You</h1>
                <FaChevronRight />
            </div>
    {sidebaritems2.map((item)=>(
     <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 rounded-xl px-3 py-1'>
        <div className='text-xl cursor-pointer'>{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
    ))}
    </div>
    <br />
    <hr />
         {/* Explore.... */}
         <div className='mt-4 space-y-3 items-center'>
                <h1 className='font-bold'>Explore</h1>
            
    {sidebaritems3.map((item)=>(
     <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 rounded-xl px-3 py-1'>
        <div className='text-xl cursor-pointer'>{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
    ))}
    </div>
    <br />
    <hr />
     
           {/* More.... */}
           <div className='mt-4 space-y-3 items-center'>
                <h1 className='font-bold'>More From YouTube</h1>
            
    {sidebaritems4.map((item)=>(
     <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 rounded-xl px-3 py-1'>
        <div className='text-xl cursor-pointer text-red-500'>{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
    ))}
    </div>
    <br />
    <hr />
             {/* Setting.... */}
             <div className='mt-4 space-y-3 items-center'>            
    {sidebaritems5.map((item)=>(
     <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-300 rounded-xl px-3 py-1'>
        <div className='text-xl cursor-pointer' >{item.icon}</div>
        <span className='cursor-pointer'>{item.name}</span>
        </div>
    ))}
    </div>
    <br />
    <hr />
           {/* Footer.... */}
           <div className='mt-4 text-gray-700 ml-4 text-xs font-semibold'>
    <span>About Press Copyright <br />Contact us Creators <br />AdvertiseDevelopers</span><br /><br />
    <span>Terms Privacy Policy & Safety <br />How YouTube works <br />Test new features</span>
    <br /><br />
    <p className='text-gray-500'>© 2024 Google LLC</p>
    </div>
    </div>
     )
}
</>
    
  )
}

export default Sidebar
