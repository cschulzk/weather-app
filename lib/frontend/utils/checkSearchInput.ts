
// Either provied a reason for the error, or there was no error.
export type SearchCheck = {cause: string, prompt: boolean}

const checkSearchInput = (input: string) => {
  if (input.length === 0) {
    return {cause: '', prompt: false};
  }
  if (Number(input)) {
    return input.length < 5 
    ? {cause: 'Zipcodes require 5 digits. Keep going!', prompt: true} 
    : {cause: 'null', prompt: false};
  } else {
    return input.length < 3 
    ? {cause:'At least 3 characters need to make a search. Keep going!', prompt: true} 
    : {cause: 'null', prompt: false};
  }
};

export default checkSearchInput;
