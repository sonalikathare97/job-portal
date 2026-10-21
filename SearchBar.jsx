import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({
      keyword: keyword.trim(),
      location: location.trim(),
    });
  };

  return (
    <section className="search-section">
      <h1>Find Your Dream Job</h1>

      <p>
        Search for jobs that match your skills and interests.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Job title, keyword or skill"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search Jobs
        </button>
      </div>
    </section>
  );
}

export default SearchBar;