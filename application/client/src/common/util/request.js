/**
 * Utility function used for api requests to the backend
 */
export const request = async (url, options = {}) => {
  const apiHost =
    process.env['REACT_APP_API_FULL_HOST'] || 'http://localhost:5000';
  const fullUrl = `${apiHost}${url}`;
  return fullRequest(fullUrl, options);
};

/**
 * Utility function used for api requests to the backend including the api host
 */
export const fullRequest = async (fullUrl, options = {}) => {
  alert('REQUEST: ' + fullUrl);
  return fetch(fullUrl, {
    ...options,
  }).then((data) => {
    return data.json();
  });
};
