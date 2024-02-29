import SearchImages from './Api';
import { useState } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

function App() {
  const [images, setImages] = useState([]);
  
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);

    setImages(result);
    //searchImages(term);
  }
  return (
   <div>
    <SearchBar onSubmit = {handleSubmit} />
    <ImageList images={images} />
   </div> 
  );
}

export default App;