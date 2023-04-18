import { LocationQuery } from "@/lib/types/weatherTypes/location";
import styles from './searchBar.module.css'

const SuggestionItem = ({suggestion, handleSubmit}: {suggestion: LocationQuery, handleSubmit: Function}) => {
  const idString = `${suggestion.name}, ` + (suggestion.region.length > 0 ? `${suggestion.region}, ` : '') + suggestion.country;
  return (
    <li className={styles.suggestionContainer} onClick={(e) => handleSubmit(e, idString)}>
        {idString}
    </li>
  )
};

export default SuggestionItem;