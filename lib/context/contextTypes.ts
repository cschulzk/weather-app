import { Dispatch, SetStateAction } from "react";

export type UnitsOfMeasursement = {
  system: 'US' | 'metric';
  temperature: '°F'|'°C'|'K';
  distance: 'km'|'mi';
}

export interface AppContextType {
  units: UnitsOfMeasursement,
  setUnits: Dispatch<SetStateAction<UnitsOfMeasursement>>;
}