import './YTSearch.scss'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import search from '../apis/search'
import store from '../store/store'
import {apiResponseRecieved} from '../store/actions/actions'

function YTSearchBar() {
    const [searchField,setSearchField] = useState('');




    const handleSearch = async () => {
      if(searchField || searchField === ""){
        let data = await search(searchField);
        console.log(data);
        await store.dispatch(apiResponseRecieved(data.items));
        console.log(store.getState());
      } else{
        console.log('Search empty');
      }
      
  }

  //Dynamic Search
/*    useEffect(()=>{
      handleSearch();
    }
      ,[searchField])
*/


  return (
    <div className="search-container">
        <input type="text" value={searchField} onChange={ (e)=> setSearchField(e.target.value)} placeholder="Search youtube" />
        <button className="submit" onClick={handleSearch}>
            <IoMdSearch size={20}/>
        </button>
   </div>
  )
}

export default YTSearchBar