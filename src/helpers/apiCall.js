export const getRestaurants = () => {
  return fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
    method: 'GET',
    headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
    }
  })
  .then((response) => response.json())
  .then((data) => {
    return data
  })
}