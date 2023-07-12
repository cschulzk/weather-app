import { useState } from 'react';
import type { ChangeEvent, FormEvent, KeyboardEventHandler} from 'react'
import styles from './searchBar.module.css'
import fetcher from '../utils/fetcher';
import { APIerror } from '@/lib/types/apiResponses';
import { LocationQuery } from '@/lib/types/weatherTypes/location';
import SuggestionsDropdown from './SuggestionsDropdown';
import checkSearchInput, { SearchCheck } from '../utils/checkSearchInput';
import { useRouter } from 'next/router'

const defaultSearchCheck: SearchCheck = {cause: '', prompt: false}

const WeatherSearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<LocationQuery[]>([])
  const [searchCheck, setSearchCheck] = useState<SearchCheck>(defaultSearchCheck)
  const [lastKeyPressed, setLastKeyPressed] = useState<NodeJS.Timeout>()

  const fetchSuggestions = async (searchString: string) => {
    await fetcher(`/api/getLocations?search=${searchString}`)
    .then((res: LocationQuery[] | APIerror) => {
      setSuggestions(res as LocationQuery[])
    },
    (reason) => {console.error(reason)});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, submitLocation: LocationQuery) => { 
    e.preventDefault();
    setSearchValue('');
    setSuggestions([]);
    setSearchCheck(defaultSearchCheck);
    router.push(`/weather/${submitLocation.lat},${submitLocation.lon}`);
    // Redirect to the page /weather/[location]
  };

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    clearTimeout(lastKeyPressed)
    if (e.target.value.length === 0) {
      setSearchCheck(defaultSearchCheck)
    } else if (e.target.value.length < 3) {
      setSuggestions([]);
    } else {
      await fetchSuggestions(e.target.value);
    };
    if (suggestions.length === 0) {
      setLastKeyPressed(setTimeout(() => {
        setSearchCheck(checkSearchInput(e.target.value))
      }, 1000))
    } else {
      setSearchCheck(defaultSearchCheck)
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLElement> = async (e) => {
    clearTimeout(lastKeyPressed)
    if (e.key === 'Enter') {
      // await fetchSuggestions(e.target.value);
      // Add any logic you want to happen when Enter is pressed
    };
  };

  return (
    <form className={styles.searchBarContainer}>
      <label htmlFor={'search-bar'} className={styles.searchLabel}>Search</label>
      <input 
        className={styles.searchBar}
        type='search'
        name='search-bar'
        id='search-bar'
        list='search-suggestions'
        placeholder={'Search by city name or zipcode'}
        // Set value to searchValue.value
        value={searchValue.length > 0 ? searchValue : ''}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <SuggestionsDropdown suggestions={suggestions} searchCheck={searchCheck} handleSubmit={handleSubmit} />
    </form>
  )
};

export default WeatherSearchBar;
