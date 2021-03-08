import React, {Component} from 'react';


const election= () => (
    <center>
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s" 
        />
        <button type="submit">Search</button>
        
    </form>
    </center>
);


export default election;