import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/Card';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import * as parser from '../utils/parser';


export default function Home({ countries }) {
  const [countryList, setCountryList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectFilter, setSelectFilter] = useState("");


  const vCard = countryList.map((country) => {
    return (
      <Card key={nanoid()}
        flag={country.flags.svg}
        name={country.name.common}
        population={parser.formatNumber(country.population)}
        region={country.region}
        capital={country.capital}
        fobj={country} >
      </Card>
    );
  });

  const vRegions = [];
  countries.map((country) => {
    if (!vRegions.includes(country.region)) {
      vRegions.push(country.region);
    }
  });

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSelectChange(event) {
    setSelectFilter(event.target.value);
  }


  //handle searchBar
  useEffect(() => {
    if (search === "") {
      setCountryList(countries);
    } else {
      const filteredCountriesByName = [...countries].filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
      setCountryList(filteredCountriesByName);
    }

  }, [search]);

  //handle selectFilter
  useEffect(() => {
    if (selectFilter === "") { //Verify base on search and selectFilter
      setCountryList(countries);
    } else {
      const filteredCountries = [...countries].filter((country) =>
        country.region.includes(selectFilter)
      );
      setCountryList(filteredCountries);

    }

  }, [selectFilter]);


  return (
    <main className={styles.container}>
      <Head>
        <title>FrontendMentor - Country App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Container */}
      <div className="px-8 h-full w-full h-full min-h-screen md:min-h-screen dark:bg-gray-800">

        {/* SEARCH BAR */}
        <div className="flex flex-col justify-between gap-5 py-5 sm:flex-row sm:items-center sm:px-5">

          <div>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                {/* SearchLogo */}
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

              </div>
              <input type="search" id="default-search" name="default-search" className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a Country" required
                value={search} onChange={handleChange} />
            </div>
          </div>


          <div>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-md p-3 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectFilter} onChange={handleSelectChange} >
              <option defaultValue disabled>Filter by region</option>
              <option value="">All Regions</option>
              {
                vRegions.map((x, y) =>
                  <option key={y}>{x}</option>)
              }
            </select>
          </div>
        </div>

        {/* Grid--Container */}
        <div className="container mx-auto px-5">
          {/* Handle Break point here */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

            {vCard}

          </div> {/* Grid--breakpoint------- */}
        </div>  {/* Grid--Container */}


      </div> {/* container */}


      {/* </Layout> */}


      <div>
        <footer className={styles.footer}>
          <a > Powered by{' '} <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
          <Link href="https://www.frontendmentor.io?ref=challenge">
            <a > Challenge by Frontend Mentor, Coded by Jona872 </a>
          </Link>
        </footer>
      </div>

    </main>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const countries = await res.json();

  if (!countries) {
    return {
      notFound: true,
    }
  }

  return {
    props: { countries }, // will be passed to the page component as props
  }
}