import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import { nanoid } from 'nanoid';
import * as parser from '../../utils/parser'


export default function showBorderCountry({ props }) {
  const [borderNames, setBorderNames] = useState([]);
  const country = props[0];

  return (
    <div className="p-5 h-[calc(90vh)] dark:bg-gray-800">
      {/* Big container Handling margins */}
      <div className="md:m-24">
        <Link href="/">
          <a className="inline-flex items-center py-1 px-4 md:px-6 md:rounded-lg text-sm font-medium text-center text-gray-900 bg-white rounded-sm border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 mb-4 md:mb-16">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
            Back
          </a>
        </Link>

        {/* container img & body */}
        <div className="py-5 flex flex-col md:flex md:flex-row md:gap-20 md:w-full">

          {/* Flag */}
          <img className="rounded-t-sm px-1.5 h-56 my-5 w-full-md md:w-full md:h-full md:my-0 " src={country.flags.svg} alt="flag" />

          {/* Body */}
          <div className="body md:flex md:flex-col md:justify-center md:w-full" >
            {/* country name */}
            <p className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name.common}</p>

            {/* Body--Description--1 */}
            <div className="flex flex-col gap-5  md:flex md:flex-row md:justify-between">

              <div className="mb-3 font-bold text-gray-700 dark:text-gray-400 leading-loose">
                <p>
                  Native Name: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {parser.parseNativeName(country.name.nativeName)}
                  </span>
                </p>
                <p>
                  Population: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {parser.formatNumber(country.population)}
                  </span>
                </p>
                <p>
                  Region: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {country.region}
                  </span>
                </p>
                <p>
                  Sub Region: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {country.subregion}
                  </span>
                </p>
                <p>
                  Capital: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {country.capital[0]}
                  </span>
                </p>
              </div> {/* body--description------- */}

              {/* Body--Description--2 */}
              <div className="mb-3 font-bold text-gray-700 dark:text-gray-400 leading-loose">
                <p>
                  Top Level Domain: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {country.tld[0]}
                  </span>
                </p>
                <p>
                  Currencies: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {parser.parseCurrencies(country.currencies)}
                  </span>
                </p>
                <p>
                  Lenguajes: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {parser.parseLenguajes(country.languages)}
                  </span>
                </p>
              </div> {/* body--description------- */}

            </div>  {/* //flex container */}
            
            {/* Body--Description--3 */}
            {
              props[0].borders &&
              <div className="flex flex-col gap-3 md:flex md:flex-row md:items-center md:mt-10 mt-8">
                <div className="font-bold text-gray-700 dark:text-gray-400">
                  <h4> Border Countries: </h4>
                </div>
                <div className="grid grid-cols-3 gap-3 text-gray-700 dark:text-gray-400 md:mt-0  md:grid-cols-5">
                  {
                    props[0].borders.map((border) => {
                      return (
                        <Link href={`/border/${encodeURIComponent(border)}`} style="cursor: pointer;">
                          <a key={nanoid()} className="drop-shadow-xl py-2 px-4 text-xs font-medium text-center text-gray-900 bg-white rounded-sm border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">{border}</a>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            }
            {/* body--description------- */}
          </div>
        </div>
      </div>  {/* Big container Handling margins */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { border } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${border}`);
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