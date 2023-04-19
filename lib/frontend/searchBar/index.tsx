import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent} from 'react'
import styles from './searchBar.module.css'
import fetcher from '../utils/fetcher';
import { APIerror } from '@/lib/types/apiResponses';
import { LocationQuery } from '@/lib/types/weatherTypes/location';
import SuggestionsDropdown from './SuggestionsDropdown';
import checkSearchInput, { SearchCheck } from '../utils/checkSearchInput';

type Callback = (submitValue: string) => Promise<void>;
const defaultSearchCheck: SearchCheck = {cause: '', prompt: false}

// Kept this compoent
const SearchBar = ({placeholder, callback}: {placeholder: string; callback: Callback}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<LocationQuery[]>([])
  const [searchCheck, setSearchCheck] = useState<SearchCheck>(defaultSearchCheck)
  const [lastKeyPressed, setLastKeyPressed] = useState<NodeJS.Timeout>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, submitValue: string) => { 
    e.preventDefault();
    await callback(submitValue)
    setSearchValue('');
    setSuggestions([]);
    setSearchCheck(defaultSearchCheck)
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

  useEffect(() => {
      clearTimeout(lastKeyPressed)
      if (searchValue.length === 0) {
      setSearchCheck(defaultSearchCheck)
    } else if (suggestions.length === 0) {
      setLastKeyPressed(setTimeout(() => {
        setSearchCheck(checkSearchInput(searchValue))
      }, 1000))
    } else {
      setSearchCheck(defaultSearchCheck)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions.length, searchValue])

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
      <SuggestionsDropdown suggestions={suggestions} searchCheck={searchCheck} handleSubmit={handleSubmit} />
    </form>
  )
};

export default SearchBar;
