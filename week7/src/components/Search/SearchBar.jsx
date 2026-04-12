import React, { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryAtom, searchResultsAtom } from '../../recoil/searchAtom';
import './Search.css';

const SearchBar = () => {
  const [query, setQuery] = useRecoilState(searchQueryAtom);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom);
  const [inputValue, setInputValue] = useState(query);

  const fetchResults = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults({ results: [], loading: false, error: null });
      return;
    }

    setSearchResults((prev) => ({ ...prev, loading: true, error: null }));
    try {
      // Using JSONPlaceholder as a mock search (filtering by name)
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`);
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setSearchResults({ results: data, loading: false, error: null });
    } catch (err) {
      setSearchResults({ results: [], loading: false, error: err.message });
    }
  }, [setSearchResults]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue !== query) {
        setQuery(inputValue);
        fetchResults(inputValue);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [inputValue, query, setQuery, fetchResults]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users (with debounce)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
      
      {searchResults.loading && <p>Searching...</p>}
      {searchResults.error && <p className="error">{searchResults.error}</p>}
      
      <ul className="search-results">
        {searchResults.results.map((user) => (
          <li key={user.id} className="search-item">
            {user.name} ({user.username})
          </li>
        ))}
        {!searchResults.loading && inputValue && searchResults.results.length === 0 && (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
