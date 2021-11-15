// *Imports
import React, {useState} from 'react';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'OsGydTzPWGt91V7Ji4ZXzjG0oHZlIttD';

// *component declaration
const NytApp = () => {

    // *state variables declared
        // defining what kind of data each variable will hold and setting them to be empty because they are there to be changed
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);

    // *Hooks- They let you use state and other React features without writing a class. Building your own Hooks lets you extract component logic into reusable functions
    // *useEffect- is a Hook that manages the side effects of functional components 
    // *useState- A Hook that allows you to have state variables in functional components

    // *Methods
        // because we used an arrow function we do not have to bind this method.because arrow functions do not create their own scope, 
        // so they won't use the keyword 'this' to refer to themselves but they will refer to their parent 
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    };

    // *Display
    return(
        <div className="main">
            <div className="mainDiv">

            </div>
        </div>
    )
};

// *export
export default NytApp;