import React from 'react'
import { useState } from 'react'
import './SearchResult.css'

const Search = () => {
  const [state,setState]= useState("")
  return (
    <>
    <div className='searchbars'>
    <input type="text" placeholder='search' className='input-decoration' onChange={inputEvent} value={img}></input>
</div>
      
    </>
  )
}

export default Search
