import { LocationQuery } from "@/lib/types/weatherTypes/location";
import styles from './searchBar.module.css'
import SuggestionItem from "./SuggestionItem";

const SuggestionsDropdown = ({suggestions, handleSubmit}: {suggestions: LocationQuery[], handleSubmit: Function}) => {
  return (
    <ul className={styles.suggestionsDropdown}>
      {suggestions.length > 0 && suggestions.map(
        (suggestion: LocationQuery) => {
          return (
            <SuggestionItem key={`suggestion-${suggestion.id}`} suggestion={suggestion} handleSubmit={handleSubmit} />
          )
        })
      }
    </ul>
  );
};

export default SuggestionsDropdown;
