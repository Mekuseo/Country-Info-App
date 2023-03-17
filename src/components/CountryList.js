// CountriesList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillMicFill as MicIcon } from 'react-icons/bs';
import { AiFillSetting as SettingIcon } from 'react-icons/ai';
import { getAllCountries as fetchCountries } from '../redux/countries';
import CountryCard from './CountryTile';
import SortingBox from './SortingDropdown';
import SearchBox from './SearchInput';
import DisplayStatus from './StatusDisplay';

const CountryList = () => {
  const countryData = useSelector((state) => state.data);
  const countryStatus = useSelector((state) => state.status);
  const [countryCount, setCountryCount] = useState(13);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortingMethod, setSortingMethod] = useState('area-d');
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryStatus === 'idle') dispatch(fetchCountries());
  }, [countryStatus, dispatch]);

  // Search Feature
  const filteredCountries = searchQuery.trim()
    ? [...countryData].filter((c) => c.name.common.toLowerCase().includes(searchQuery))
    : [...countryData];

  // Sort Feature
  if (sortingMethod === 'area-d') {
    filteredCountries.sort((a, b) => b.area - a.area);
  } else if (sortingMethod === 'area-a') {
    filteredCountries.sort((a, b) => a.area - b.area);
  } else if (sortingMethod === 'name-d') {
    filteredCountries.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  } else if (sortingMethod === 'name-a') {
    filteredCountries.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));
  }

  return (
    <section className="homepage">
      <div className="toolbar">
        <h1 className="brand">
          <Link to="/">NationGuide</Link>
        </h1>
        <SearchBox query={searchQuery} setQuery={setSearchQuery} />
        <div className="d-row">
          <MicIcon />
          <SettingIcon />
        </div>
      </div>
      {filteredCountries.length > 0 && (
        <CountryCard
          className="feature-item"
          name={filteredCountries[0].name}
          area={filteredCountries[0].area}
          flagPng={filteredCountries[0].flags.png}
          flagAlt={filteredCountries[0].flags.alt}
        />
      )}
      <SortingBox sorter={sortingMethod} setSorter={setSortingMethod} />
      <DisplayStatus status={countryStatus} />
      {filteredCountries.length === 0 && <DisplayStatus status="notfound" />}
      <div className="main-grid">
        {filteredCountries.slice(1, countryCount).map((c) => (
          <CountryCard
            key={c.name.common}
            className="grid-item"
            name={c.name}
            area={c.area}
            flagPng={c.flags.png}
            flapAlt={c.flags.alt}
          />
        ))}
      </div>
      {countryCount < filteredCountries.length && (
        <div className="btn-container">
          <button
            className="more-btn"
            type="button"
            onClick={() => setCountryCount((count) => count + 12)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CountryList;
