import React from 'react'

const Menu = () => {
    const list=[
        'All','Music','React routers','Computer programming','Reverberation','Movie musicals',
        'Pak national cricket team','News','Mixes','1990s','Live','Dramedy','Cinemas',
        'Dubbing','Cricket','Football','Learn Coding'
    ]
  return (
    <div className='container flex overflow-x-scroll scrollbar-none hover:scrollbar-thin p-2 space-x-4'>
    {list.map(item=>(
    <div key={item} className='py-2 px-4 bg-gray-200 duration-300 rounded-xl font-medium
    hover:bg-gray-300 cursor-pointer text-gray-700 whitespace-nowrap' >{item} </div>
    ))}
    </div>
    
  )
}

export default Menu
