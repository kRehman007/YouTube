import React from 'react'
import Time from '../Loader/Time'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

const SearchCard = ({ video }) => {
    return (
        <div>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex space-x-3 overflow-y-auto' style={{ width: '90%' }}>
                    <div className='relative mb-4' style={{ minWidth: '500px', height: 'min-content' }}>
                        <img className=' rounded-lg cursor-pointer hover:rounded-none' src={video?.thumbnails[0]?.url} width='100%' height='100%' />
                        <span
                            style={{ position: 'absolute', bottom: '0', right: '0' }}
                        >{video?.lengthSeconds && <Time time={video?.lengthSeconds} />}</span>
                    </div>

                    <div className='flex flex-col mt-1'>
                        <span className='font-bold text-[18px]'>{video.title}</span>
                        <span className='font-semibold' style={{ color: 'gray', fontSize: '16px', marginTop: '-13px' }}>
                            {`${abbreviateNumber(
                                video?.stats.views, 2
                            )} views`}
                            <span className='ml-1 font-bold text-[24px] mt-[-10px] mr-1'>.</span> {video?.publishedTimeText}

                        </span>
                        <span className='font-semibold flex items-center' style={{ color: 'gray', fontSize: '16px', marginTop: '7px' }}>
                            <img src={video?.author?.avatar[0].url} alt='' className='rounded-full overflow-hidden mr-2 h-9 w-9' />
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (<BsFillCheckCircleFill
                                className='text-gray-600 ml-2 text-[12px]' />)}
                        </span>
                        <span className='mt-3' style={{ color: 'gray', fontSize: '16px' }}>{video?.descriptionSnippet}</span>

                    </div>
                    <div>


                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SearchCard
