import React from 'react'
import Link from 'next/link';

export default function Card(props) {
  // console.log("🚀 ~ file: Card.js ~ line 4 ~ Card ~ props", props)
  return (
    <>
      <Link href={`/name/${encodeURIComponent(props.name)}`} style="cursor: pointer;">
          {/* Card */}
        <a className="max-w bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 mb-2">
          <div>
            {/* Card -- Img  */}

            <img className="rounded-t-lg object-cover min-h-full min-w-full" src={props.flag} alt="flag" />


            {/* Card--Body */}
            <div className="p-7">
              {/* Body--title */}
              <p className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</p>

              {/* Body--Description */}
              <div className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                <p>
                  Population: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.population}
                  </span>
                </p>
                <p>
                  Region: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.region}
                  </span>
                </p>
                <p>
                  Capital: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props.capital}
                  </span>
                </p>
              </div> {/* body--description------- */}
            </div> {/* body------- */}
          </div> {/* Card------- */}
        </a>
      </Link>
    </>
  )
}