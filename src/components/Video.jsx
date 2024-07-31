import React from 'react'
import Time from '../Loader/Time'
import {Link} from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'
const Video = ({video}) => {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
      <div className=''>
        {/* Thumbnail and Duration... */}
        <div className='relative h-40 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden'>
      <img className='h-full w-full' src={video?.thumbnails[0]?.url} />      
      {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
        </div>
        {/* Logo and Title.... */}
        <div className='flex items-start mt-3 space-x-2'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
       <img src={video?.author?.avatar[0].url} alt='' className='h-full w-full rounded-full overflow-hidden' />         
            </div>
            <span className='text-sm font-bold line-clamp-2'>{video?.title}</span></div>
            <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-600'>{video?.author?.title}
            {video?.author?.badges[0]?.type==='VERIFIED_CHANNEL' && (<BsFillCheckCircleFill
              className='text-gray-600 ml-1 text-[12px]'  />)}     
            </span>
            <div className='flex text-gray-500 text-[12px] items-center'>
           <span>{`${abbreviateNumber(
            video?.stats.views,2
           )} views`}</span>
           <span className='ml-1 font-bold text-[24px] mt-[-10px] mr-1'>.</span> 
           <span>{video?.publishedTimeText}</span>
           </div>
      </div>
      </Link>
    </div>
  )
}

export default Video
