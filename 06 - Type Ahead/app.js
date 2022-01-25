const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) // look more about 'fetch()'
    .then(info => info.json())
    .then(data => cities.push(...data));
    
function matchFilter(word, cities) {
    return cities.filter((place) => {
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch() {
    const wordToMatch = matchFilter(this.value, cities);
    const html = wordToMatch.map((place) => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `'<span class = 'hl'>${this.value}</span>'`);
        const stateName = place.state.replace(regex, `'<span class = 'hl'>${this.value}</span>'`);
        return `
        <li>
            <span class = 'name'>${cityName}, ${stateName}</span>
            <span class = 'population'>${numberWithCommas(place.population)}</span>
        </li>`
    }).join('');
    displaySuggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search'); // input to write
const displaySuggestions = document.querySelector('.suggestions'); // ul to show suggestions

searchInput.addEventListener('change', displayMatch);
searchInput.addEventListener('keyup', displayMatch);