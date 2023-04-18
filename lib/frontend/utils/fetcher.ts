const fetcher = async (uri: string) => {
  const response: Response =  await fetch(`${uri}`, {method: "GET"})
  return response.json();
};

export default fetcher;