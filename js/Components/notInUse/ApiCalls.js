//DEFINE VARIABLES
const apiUrl = "https://v2.api.noroff.dev/square-eyes";
// const itemUrl = "https://v2.api.noroff.dev/square-eyes" + movieID;

//ITEM DETAIL QUERY

//CAll API
async function apiCall() {
  try {
    const repsonse = await fetch(apiUrl);
    const json = repsonse.json();
    const apiArray = json.data;
    return apiArray;
  } catch (error) {
    resultsContainer.innerHTML = message;
  }
}
