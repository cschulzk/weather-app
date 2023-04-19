import { LocationQuery } from "@/lib/types/weatherTypes/location";
import styles from './searchBar.module.css'
import SuggestionItem from "./SuggestionItem";
import { SearchCheck } from "../utils/checkSearchInput";
import Suggestion from "./Suggestion";

const SuggestionsDropdown = (
  {
    suggestions,
    searchCheck,
    handleSubmit
  }:{
    suggestions: LocationQuery[],
    searchCheck: SearchCheck,
    handleSubmit: Function
  }
  ) => {
  const promptString = searchCheck.cause;
  const prompt = searchCheck.prompt;
  const noResults = !prompt && suggestions.length === 0 && promptString === "null";
  const noResultsString = "Hmm there aren't any results for that place. Hopefully it's nice weather!"
  
  
  return (
    <ul className={styles.suggestionsDropdown}>
      {prompt && <Suggestion key={'searchCheck'} idString={promptString} handleSubmit={()=> null} />}
      {noResults && <Suggestion key={'searchCheck'} idString={noResultsString} handleSubmit={()=> null} />}
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
