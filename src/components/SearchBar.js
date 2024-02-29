import { useState } from 'react';
import './SearchBar.css';

function SearchBar( {onSubmit} ) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
     onSubmit(term);
   };
   const handleChange = (event) => {
    // console.log(event.target.value);
      setTerm(event.target.value);
   };
  return (
   <div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
      <label>Enter element</label>
    <input placeholder="what" onChange={handleChange} value={term} />
    </form>
    {/* <button onClick={handleClick}>Click</button> */}
   </div> 
  );
}

export default SearchBar;