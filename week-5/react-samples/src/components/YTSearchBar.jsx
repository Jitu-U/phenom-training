import './YTSearch.scss'
import React, { useEffect, useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import search from '../apis/search'
import store from '../store/store'
import {apiResponseRecieved} from '../store/actions/actions'

function YTSearchBar() {
    const [searchField,setSearchField] = useState('');


    function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch(searchField)
    }
  }


    async function handleSearch() {
    if (searchField || searchField !== "") {
      let data = await search(searchField)
      if (data.error) {
        console.log(`ERROR: ${data.error.code} \n${data.error.message}`)
        alert(`ERROR: ${data.error.code}\nUnable to get the results`)
      } else {
        console.log(data)
        await store.dispatch(apiResponseRecieved(data.items))
        console.log(store.getState())
      }
    } else {
      alert("Empty Search Field")
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
        <input type="text" value={searchField} onChange={ (e)=> setSearchField(e.target.value)} placeholder="Search youtube" onKeyDown={handleKeyDown}/>
        <button className="submit" onClick={handleSearch} >
            <IoMdSearch size={20}/>
        </button>
   </div>
  )
}

export default YTSearchBar