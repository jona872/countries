import React from 'react'

export default function Card(props) {
    // console.log("🚀 ~ file: Card.js ~ line 4 ~ Card ~ props", props)
    return (
        <>
            {/* Card */}
            <div className="max-w bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
                {/* Card -- Img  */}
                <img className="rounded-t-lg" src={props.flag} alt="flag" />

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
                    </div> {/* body--title------- */}
                </div> {/* body------- */}
            </div> {/* Card------- */}

        </>
    )
}

{/* <>
            
            <div className="max-w bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
            
                <img className="rounded-t-lg" src="https://flagcdn.com/br.svg" alt="flag" />

            
                <div className="p-7">
            
                    <p className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brazil</p>

                    
                    <div className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                        <p>
                            Population: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                206.135.893
                            </span>
                        </p>
                        <p>
                            Region: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Americas
                            </span>
                        </p>
                        <p>
                            Capital: <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Brasilia
                            </span>
                        </p>
                    </div>
                </div>
            </div> 
        </> */}

