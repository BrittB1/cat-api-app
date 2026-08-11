import { useState } from "react";

function SearchBar({onSearch}) {
    const [query, setQuery] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        onSearch(!trimmed);
    }
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
            className="search-input"
            type="text"
            placeholder="Search a Breed"
            value={query}
            onChange={(event)=> setQuery(event.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}
export default SearchBar;