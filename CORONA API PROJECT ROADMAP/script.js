const countrySelect = document.getElementById("country-select");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");

const fetchData = async (url) => {
  loader.classList.remove("hidden");
  errorDiv.classList.add("hidden");
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
  } catch (err) {
    errorDiv.textContent = "Error fetching data";
    errorDiv.classList.remove("hidden");
  } finally {
    loader.classList.add("hidden");
  }
};

const displayData = (data) => {
  document.getElementById("cases").textContent = `Total Cases: ${data.cases}`;
  document.getElementById("deaths").textContent = `Total Deaths: ${data.deaths}`;
  document.getElementById("recovered").textContent = `Total Recovered: ${data.recovered}`;
};

const loadCountries = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  const countries = await res.json();
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.country;
    option.textContent = country.country;
    countrySelect.appendChild(option);
  });
};

countrySelect.addEventListener("change", () => {
  const country = countrySelect.value;
  const url = country
    ? `https://disease.sh/v3/covid-19/countries/${country}`
    : `https://disease.sh/v3/covid-19/all`;
  fetchData(url);
});

fetchData("https://disease.sh/v3/covid-19/all");
loadCountries();
