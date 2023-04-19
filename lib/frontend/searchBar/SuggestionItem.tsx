import { LocationQuery } from "@/lib/types/weatherTypes/location";
import Suggestion from "./Suggestion";

const SuggestionItem = ({suggestion, handleSubmit}: {suggestion: LocationQuery, handleSubmit: Function}) => {
  const idString = `${suggestion.name}, ` + (suggestion.region.length > 0 ? `${suggestion.region}, ` : '') + suggestion.country;
  return <Suggestion idString={idString} handleSubmit={handleSubmit} />
};

export default SuggestionItem;