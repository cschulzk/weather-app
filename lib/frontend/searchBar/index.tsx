import { useState } from 'react';
import type { Dispatch, SetStateAction, ChangeEvent, FormEvent} from 'react'
import styles from './searchBar.module.css'
import fetcher from '../utils/fetcher';
import { APIerror, ForecastResponse } from '@/lib/types/apiResponses';
import { LocationQuery } from '@/lib/types/weatherTypes/location';
import SuggestionsDropdown from './SuggestionsDropdown';

type Callback = (submitValue: string) => Promise<void>;

// Kept this compoent
const SearchBar = ({placeholder, callback}: {placeholder: string; callback: Callback}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<LocationQuery[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, submitValue: string) => { 
    e.preventDefault();
    await callback(submitValue)
    setSearchValue('');
    setSuggestions([]);
  };

  const updateSuggestions = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    if (e.target.value.length < 3) {
      setSuggestions([]);
    } else {
      await fetcher(`/api/getLocations?search=${e.target.value}`)
      .then((res: LocationQuery[] | APIerror) => {
        setSuggestions(res as LocationQuery[])
      },
      (reason) => {console.error(reason)});
    }
  };

  return (
    <form className={styles.searchBarContainer} onSubmit={(e) => handleSubmit(e, searchValue)} >
      <label htmlFor={'search-bar'} className={styles.searchLabel}>Search</label>
      <input 
        className={styles.searchBar}
        type='search'
        name='search-bar'
        id='search-bar'
        list='search-suggestions'
        placeholder={placeholder}
        value={searchValue.length > 0 ? searchValue : ''}
        onChange={updateSuggestions}
        autoComplete="off"
      />
      <SuggestionsDropdown suggestions={suggestions} handleSubmit={handleSubmit} />
    </form>
  )
};

export default SearchBar;
