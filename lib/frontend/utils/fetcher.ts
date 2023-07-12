const fetcher =  async (uri: string, postData?: Object | null) => {
  const requestData = postData && Object.keys(postData).length > 0 ? 
    {
      method: 'POST',
      body: JSON.stringify(postData)
    } 
  : 
    {method: 'GET'};
  const response = await fetch(uri, requestData);
  return response.json();
}

export default fetcher;
