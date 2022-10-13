/* Utils.js */
/* This file contains functions you can use anywhere in your application */

function parseNativeName(objName) {
    const lastElement = Object.keys(objName).pop();
    const nativeName = objName[lastElement].common;
    const output = (typeof nativeName !== "undefined") ? nativeName : "Not found";
    return output;
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
function parseCurrencies(currencies) {
    //currencies: { EUR: Object { name: "Euro", symbol: "€" } }
    let extract = Object.values(currencies)[0].name;
    const output = (typeof extract !== "undefined") ? extract : "Not found";
    return output;
}
function parseLenguajes(languages) {
    //lenguajes: deu: "German", fra: "French",  nld: "Dutch"
    // let extract = Object.values(languages).toString();

    let extract = Object.values(languages).join(', ');
    const output = (typeof extract !== "undefined") ? extract : "Not found";
    return output;
}

async function parseCodeName(name) {
    fetch(`https://restcountries.com/v3.1/alpha/${name}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

// Now you have to export each function you want
export {
    parseNativeName,
    formatNumber,
    parseCurrencies,
    parseLenguajes,
    parseCodeName
};









