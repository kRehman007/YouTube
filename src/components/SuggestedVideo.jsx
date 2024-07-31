import React from 'react'
import Time from '../Loader/Time'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

const SuggestedVideo = ({ video }) => {
    return (

        <div>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex space-x-3' style={{ width: '420px' }}>
                    <div className='relative mb-3 min-w-[200px] h-[113px]'>
                        <img className=' rounded-lg cursor-pointer hover:rounded-none' src={video?.thumbnails[0]?.url} width='100%' height='100%' />
                        <span
                            style={{ position: 'absolute', bottom: '0', right: '0' }}
                        >{video?.lengthSeconds && <Time time={video?.lengthSeconds} />}</span>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <span className='font-bold text-gray-700 text-[13px]'>{video.title}</span>
                        <span className='font-semibold flex items-center' style={{ color: 'gray', fontSize: '13px', marginTop: '7px' }}>{video?.author?.title}
                            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (<BsFillCheckCircleFill
                                className='text-gray-600 ml-2 text-[12px]' />)}
                        </span>
                        <span className='font-semibold' style={{ color: 'gray', fontSize: '13px', marginTop: '-13px' }}>
                            {`${abbreviateNumber(
                                video?.stats.views, 2
                            )} views`}
                            <span className='ml-1 font-bold text-[24px] mt-[-10px] mr-1'>.</span> {video?.publishedTimeText}

                        </span>
                    </div>
                    <div>


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SuggestedVideo
