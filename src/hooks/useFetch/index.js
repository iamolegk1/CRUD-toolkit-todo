const useFetch = () => {
  const request = async (
    url,
    method,
    headers = { "Content-Type": "application/json" },
    body = null
  ) => {
    try {
      const response = await fetch(url, { method, headers, body });
      if (!response.ok) {
        throw new Error(`Server side error, status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
export default useFetch;
