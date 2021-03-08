
import './search.css';
    

const SearchBar = ({ searchQuery, setSearchQuery}) => (
    <center>
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search </span>
        </label>
        <input
            value ={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}       
            type="text"
            id="header-search"
            placeholder="Search "
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </center>
);


export default SearchBar;