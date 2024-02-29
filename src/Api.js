import axios from 'axios';

const SearchImages =async (term) => {
  const response =await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID p2fewy_ic2KSv4tbToTSOvU3B08L4ZIStaSmUgf_QuA' 
    },
    params: {  
      query: term, 
    },
  });

  return response.data.results;
};

export default SearchImages;