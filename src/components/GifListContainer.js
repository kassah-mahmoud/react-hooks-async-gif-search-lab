import React, { useState } from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = 'vtkJp16uvpjbdqv9R4HxHhr0VxTc8pqo';
const API_URL = 'https://api.giphy.com/v1/gifs/search?';


const GifListContainer = () => {
    const [gifList, setGifList] = useState([]);
    const [loading, setLoading] = useState(false);


    function handleSearch(search = '') {
        setLoading(true)
        fetch(`${API_URL}q=${search}&api_key=${API_KEY}&rating=g`)
        .then(res => res.json())
        .then(data => setGifList(data.data.slice(0,3)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

    


    return (
      <div className="gif-list-container">
        <GifList gifList={gifList} loading={loading} />
        <GifSearch onSubmit={handleSearch} />
      </div>
    );
}

export default GifListContainer
