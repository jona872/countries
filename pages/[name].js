import React from 'react'
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import Link from 'next/link';


function parseCurrencies(currencies) {
    //currencies: { EUR: Object { name: "Euro", symbol: "€" } }
    let extract = Object.values(currencies)[0].name;
    const output = (typeof extract !== "undefined") ? extract : "Not found";
    return output;
}

function parseLenguajes(languages) {
    //lenguajes: deu: "German", fra: "French",  nld: "Dutch"
    let extract = Object.values(languages).toString();
    const output = (typeof extract !== "undefined") ? extract : "Not found";
    return output;
}


export default function showCountry({ props }) {
    // console.log("🚀 ~ file: [name].js ~ line 7 ~ showCountry ~ props", props[0])
    const country = props[0];
    // console.log(Object.values(country.name.nativeName));
    return (
        <Layout>
            <Link href="/">
                <a>
                    BACK
                </a>
            </Link>
            {country.flags.svg}
            <br />
            {country.name.common}
            <br />
            {country.name.common}
            <br />
            {country.population}
            <br />
            {country.region}
            <br />
            {country.subregion}
            <br />
            {country.capital[0]}
            <br />
            {country.tld[0]}
            <br />
            Currencies: {parseCurrencies(country.currencies)}
            <br />
            Lenguajes: {parseLenguajes(country.languages)}
            {/* {country.lenguajes} */}
            {/* deu: "German"
            fra: "French"
            nld: "Dutch" */}
            <br />
            Borders
            {/* {country.borders}
            0: "FRA"
            1: "DEU"
            2: "LUX"
            3: "NLD" */}
            <br />


        </Layout>

    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { name } = params;
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await res.json();

      if (!country) {
        return {
          notFound: true,
        }
      }

    return {
        props: { props: country }, // will be passed to the page component as props
    }
}

// // Working but loss data on refresh --------------------------------
// export async function getStaticPaths() {
//     //le pongo 1 por defecto, pero va generando todas dinamicamente la primera vez que entra
//     return {
//         paths: [{ params: { name: "Iceland" } }],
//         fallback: true,
//     }
// }

// export async function getStaticProps(context) {
//     //context = params, response, query
//     const { params } = context;
//     const { name } = params;

//     const apiResponse = await fetch(`https://restcountries.com/v3.1/name/${name}`);

//     if (apiResponse.ok) {
//         const props = await apiResponse.json();

//         return { props: { props } }
//     }
// }


// export async function getServerSideProps(context) {
//     // console.log("🚀 ~ file: [name].js ~ line 21 ~ getServerSideProps ~ context", context)
//     const res = await axios.put('https://restcountries.com/v3.1/name/' + context.query.name);
//     const country = await res.json();

//     if (!country) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: { country }, // will be passed to the page component as props
//     }
// }






