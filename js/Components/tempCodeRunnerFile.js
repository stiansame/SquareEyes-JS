async function apiCall() {
  try {
    const repsonse = await fetch(apiUrl);
    const json = repsonse.json();
    const apiArray = json.data;
    // return apiArray;
    console.log(apiArray);
  } catch (error) {
    resultsContainer.innerHTML = message;
  }
}