import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();



  useEffect(() => {
   const timer = setTimeout(() =>{
    if(searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions();
    }
    },200); 
    
   return () =>{
    clearTimeout(timer);
   };
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch (YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    
    setSuggestions(json[1]);

    dispatch (
      cacheResults({
      [searchQuery]: json[1],
    })
  );
  };

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className='grid grid-flow-col p-5  m-2 shadow-lg '>
        <div className='flex col-span-1 '>
        <img 
        onClick={() => toggleMenuHandler()}
           className='h-8 cursor-pointer'
           src='https://cdn-icons-png.flaticon.com/128/2791/2791469.png'
           alt='menu icon'
        />

        <a href='/'>
        <img
            className='h-8  mx-2'
            src='https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg'
            alt='yt icon'
          />
        </a>
        
        </div>
        <div className='col-span-10 px-10'>
          <div>
            <input
             className='px-5 w-1/2 border border-gray-500 p-2 rounded-l-full' 
             type='text'
             value={searchQuery} 
             onChange={(e) => setSearchQuery(e.target.value)}
             onFocus={() =>  setShowSuggestions(true)}
             onBlur={()=> setShowSuggestions(false)}
            /> 
            <button 
              className='py-2 px-5 border border-gray-500 bg-gray-100 rounded-r-full'>
              Search
            </button>
          </div>
          {showSuggestions && (
            <div className='fixed bg-white py-4 px-4 text-lg  w-[35rem] shadow-lg rounded-lg border border-gray-100'>
             <ul >
               {suggestions.map((s) => (
                <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                  🔍{s}
                </li>
              
              ))}       
            </ul>
          </div>
          ) }
        </div>
        <div>
        <img 
            className='h-8 col-span-1'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt='user logo'
          />  
        </div>
    </div>
  )
}

export default Head;