import React from 'react'
import Sidebar from './Sidebar.jsx'
import Video from './Video'
import Menu from './Menu'
import { useAuth } from '../context/AuthProvider'

const Home = () => {
    const { data,loading } = useAuth();
    
    return (

        <div className='flex'>
            <Sidebar />
            <div className='h-[calc(100vh-6.625rem)] overflow-y-auto'>
            <Menu />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
                {!loading && data.map((item,index) => {
                    if (item.type !== 'video') return false;
                    return (
                        <Video key={index} video={item?.video} />
                    )

                })}
            </div></div></div>

    )
}

export default Home
