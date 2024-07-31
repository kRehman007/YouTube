import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/Rapidapi';
import Sidebar from './Sidebar'
import SearchCard from './SearchCard';

const Search = () => {
  const [result,setResult]=useState([])
      const {searchQuery}=useParams();
      
      useEffect(()=>{
        fetchSearchResults()
      },[searchQuery])

      const fetchSearchResults=async()=>{
       const res=await fetchData(`search/?q=${searchQuery}`)
       setResult(res.contents);
      }
      console.log(result)
  return (
    <div>
    <div className='flex flex-row h-[calc(100%-56px)]'>
     <Sidebar />
     <div>
       <div>
        {result.map((item,index)=>{
      if(item?.type!=='video') return null
      return <SearchCard key={index} video={item?.video} />
     })}       
      </div>
      </div> 
    </div>
     </div>
  
  )
}

export default Search
