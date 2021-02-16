import React, { useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption ] = useState('shows');

  const isShowsSearch = searchOption === "shows";

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  const onRadoiChange = (ev) => {
    setSearchOption(ev.target.value)
  }

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
  <div>
    <label htmlFor="shows-search">
      shows
      <input id="shows-search" type="radio" value="shows" onChange={onRadoiChange} checked={isShowsSearch} />
    </label>
    <label htmlFor="actors-search">
      actors
      <input id="actors-search" type="radio" value="people" onChange={onRadoiChange} checked={!  checked={!isShowsSearch} />
    </label>
  </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
