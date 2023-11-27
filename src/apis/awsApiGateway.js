function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

const callApi = (url, options) => {
  return fetch(url, options)
    .then(handleErrors)
    .then((response) => response.json())
    .catch((error) => error);
};

export const fetchISDGeoData = async ({ query, options }) => {
  return await callApi(
    `https://${process.env.REACT_APP_AWS_API_GATEWAY_DOMAIN}/geo/geo`,
    options
  );
};
