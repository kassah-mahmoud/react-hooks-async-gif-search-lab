import React from 'react'

const GifList = ({gifList = [], loading}) => {
    console.log(gifList);
    return loading ? (
      <div>Loading...</div>
    ) : (
      <ul>
        {gifList.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images?.original?.url} alt={gif.images?.title} />
          </li>
        ))}
      </ul>
    );
}

export default GifList;
