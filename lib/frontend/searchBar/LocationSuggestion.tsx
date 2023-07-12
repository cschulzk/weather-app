import type { MouseEvent } from "react";
import { LocationQuery } from "@/lib/types/weatherTypes/location";
import Suggestion from "./Suggestion";


const LocationSuggestion = ({suggestion, handleSubmit}: {suggestion: LocationQuery, handleSubmit: Function}) => {
  const idString = `${suggestion.name}, ` + (suggestion.region.length > 0 ? `${suggestion.region}, ` : '') + suggestion.country;
  const handleClick = (e: MouseEvent<HTMLLIElement, MouseEvent>) => handleSubmit(e, suggestion);
  return <Suggestion displayText={idString} handleClick={handleClick} />
};

export default LocationSuggestion;