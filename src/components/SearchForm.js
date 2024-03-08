import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { AppContext } from '../app/app';

function SearchForm({handleGetProducts}) {
    const [query, setQuery] = useState("");
    const [state, setState] = useContext(AppContext);
    const handleSearch=(event)=>{
        event.preventDefault();
        //setState({...state, keyword: query});
        handleGetProducts(query, 1, state.pageSize);
    }
    return (
    <form onSubmit={handleSearch}>
    <div className='row g-2'>
      <div className='col-auto'>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='form-control'></input>
      </div>
      <div className='col-auto'>
        <button className='btn btn-success'> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search</button>
      </div>
    </div>
   </form>
  )
}

export default SearchForm