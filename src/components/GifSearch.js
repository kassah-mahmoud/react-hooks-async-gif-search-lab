import React, { useState } from 'react'

const GifSearch = ({onSubmit}) => {

    const [search, setSearch] = useState('');

    const handleOnChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
    }

    return (
        <div>
            <form className="gif-search-form" onSubmit={handleSubmit}>
                <label className="d-block" htmlFor="search">Enter a Search Term</label>
                <input className="d-block" id="search" name="search" value={search} onChange={handleOnChange} />
                <button className="d-block btn btn-success" type="submit">Find Gifs</button>
            </form>

        </div>
    )
}

export default GifSearch
