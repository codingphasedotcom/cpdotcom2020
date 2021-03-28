import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import ReactGA from 'react-ga';
import getUrlParam from '../components/getParam';

export default function ChrisSean() {
  const [couponActive, setCouponActive] = useState(false);
    useEffect(() => {
        ReactGA.initialize('UA-37043736-10');
     
        if (typeof window !== 'undefined') {
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
      });
      useEffect(() => {
        window.location.href = "http://www.codingphase.com/?affcode=117955_skhhafx9&coupon=20CHRISSEAN";
        if(getUrlParam('coupon') != ''){
          setCouponActive({
            status: true,
            coupon: getUrlParam('coupon'),
            percent: parseInt(getUrlParam('coupon').substring(0, 2))
          })
          console.log(couponActive);
        }
      }, []);
  return (
    <>
      <Head>
        <title>CodingPhase - Chris Sean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="page">
            <div className="container">
              <h1>Chris Sean</h1>
              
            </div>
        </section>
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}

