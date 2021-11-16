import React, { useState } from "react";
import MovieAppDisplay from "./MovieAppDispaly";

const MovieApp = () => {
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState('');

    const fetcher = () => {

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=e3c274c30bdec34791a7632dc05ed750&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(res => { //* checks if we successfully made a a request checking the status
            if (res.status !== 200){
                throw new Error('fetch error');
            } else return res.json();
        })
        .then(json => {
            if (json.results.length === 0) {
                throw new Error('no results');//* we make sure the result in not empty
            } else {
                // const movieNum = [];
                // while (movieNum.length < 4){
                //  var r = Math.floor(Math.random()*json.results.length);
                //  movieNum.push(r);
                // }
                 
                const movieNum =Math.floor(Math.random()*json.results.length);//!stores a random movie result (whole number(random number)* the length of the results)
                setResult(json.results[movieNum]); //* we set the state of our result variable to the random movie
                console.log(json.results[movieNum]);//* we console log the movie
            }
        })
        .catch(err => console.log(err));

    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={fetcher}>Click for Movie Pic Search</button>
                {!result || !result.poster_path ? null : <MovieAppDisplay movie={result} />} 
                {/* ternary- if there is no result or no poster_path then leave it null, otherwise call MovieAppDisplay */}
            </div>
        </div>
    );
};

export default MovieApp;

// // my api key
// // e3c274c30bdec34791a7632dc05ed750
