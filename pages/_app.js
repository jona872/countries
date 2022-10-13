import Script from 'next/script';
import { useEffect } from 'react';
import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Hide splash screen when we are server side 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    }

  }, []);

  return (
    <>

      <Script id="show-banner" strategy="lazyOnload">
        {`
    // Adding dinamic load for navbar color changer =====================
    if (typeof window !== "undefined") {
     var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
     var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
     // Change the icons inside the button based on previous settings
     if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      if (typeof themeToggleLightIcon !== "undefined")
       themeToggleLightIcon.classList.remove('hidden');
     } else {
      if (typeof themeToggleDarkIcon !== "undefined")
       themeToggleDarkIcon.classList.remove('hidden');
     }
  
     var themeToggleBtn = document.getElementById('theme-toggle');
  
     themeToggleBtn.addEventListener('click', function () {
  
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
       if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
       } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
       }
  
       // if NOT set via local storage previously
      } else {
       if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
       } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
       }
      }
  
     });
    }
    
    // Adding dinamic load for navbar color changer =====================
          if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `}
      </Script>

      <Navbar />
      <Component {...pageProps} />
    </>)
}

export default MyApp
