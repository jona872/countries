import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import Loader from '../components/Loader/Loader'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <head>
                    <style>
                        {Loader}
                    </style>
                </head>
                <body>
                <div id={'globalLoader'}>
                     <div className="loader">
                        <div/>
                        <div/>
                    </div>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument