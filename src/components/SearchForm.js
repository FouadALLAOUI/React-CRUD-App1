import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchForm({handleSearch, setQuery, query}) {
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