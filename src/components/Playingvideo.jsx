import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchData } from '../utils/Rapidapi';
import ReactPlayer from 'react-player';
import SuggestedVideo from './SuggestedVideo';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';
import { AiOutlineLike } from 'react-icons/ai';

const Playingvideo = () => {
  const {id}=useParams();
  const [video,setVideo]=useState('')
  const [relatedVideo,setrelatedVideo]=useState('')
  useEffect(()=>{
    fetchVideoDetails()
    fetchRelatedVideo();
  },[id])
  const fetchVideoDetails=async()=>{
    try{
   const res=await fetchData(`video/details/?id=${id}`)
   setVideo(res)
    }
    catch(error){
      console.log('Data Fetching Error',error)
    }
  }
  const fetchRelatedVideo=async()=>{
    try{
   const res=await fetchData(`video/related-contents/?id=${id}`)
   setrelatedVideo(res)
    }
    catch(error){
      console.log('Related Data Fetching Error',error)
    }
  }
  return(

     <div className='flex flex-col space-x-4 lg:flex lg:flex-row '>
      <div className='w-[90%] lg:w-[60%] ml-10'>
      <div>
        <div className='w-[100%] h-[243px] lg:h-[480px]'>
      <ReactPlayer url={`https//www.youtube.com/watch?v=${id}`}
        height='100%' width='100%'  style={{backgroundColor:'#000000'}}
             playing={true}
      /></div>
      <div className='font-bold text-sm md:text-xl mt-4 line-clamp-2'>
        {video?.title}
      </div>
      <div className='flex justify-between flex-col md:flex-row mt-4'>
        <div className='flex space-x-2'>
          <div className='h-11 w-11 rounded-full overflow-hidden'>
        <img className='h-ful w-full object-cover' src={video?.author?.avatar[0]?.url} />
        </div>
        <div className='flex flex-col'>
        <div  className='text-md font-semibold flex items-center'>
          {video?.author?.title}
          {video?.author?.badges[0]?.type==='VERIFIED_CHANNEL' && (
            <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
          )}
        </div>
        <div className='text-sm text-gray-600'>{video?.author?.stats?.subscribersText} subscribers
        </div>
        </div>
        <span className=' mt-1 bg-red-500 px-3 rounded-full text-white cursor-pointer
        hover:bg-red-700 duration-200 flex justify-center items-center'>Subscribe</span>
        </div>
       <div className='flex mt-4 md:mt-0 space-x-2'>
      <div className='flex items-center justify-center h-11 px-6 rounded-3xl
      bg-white/[0.15]'><AiOutlineLike className='text-xl mr-1'/>
      {`${abbreviateNumber(video?.stats?.likes,2)} Likes`}
      </div>
      <div className='flex items-center justify-center h-11 px-6 rounded-3xl
      bg-white/[0.15]'>
        {`${abbreviateNumber(video?.stats?.views,2)} Views`}
      </div>
       </div>
      </div>
      <div className='p-4 bg-gray-100 rounded-xl mt-4 text-sm'>
        {video?.description}
       </div>
       <div className='flex gap-x-6 font-semibold rounded-xl mt-4 text-xl'>
        {video?.stats?.comments}
        <p>Comments</p>
       </div>
       </div>
      </div>
      <br /><br />
      <div className='flex flex-col px-4 py-6
      lg:w-[350px] xl:w-[400px]'>
        {relatedVideo?.contents?.map((item,index)=>{
        if(item.type!=='video') return null
        return <SuggestedVideo key={index} video={item?.video} />
        })}
      </div>
     </div>

  )
}

export default Playingvideo
