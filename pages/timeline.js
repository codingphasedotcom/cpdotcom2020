import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import Paths from '../components/Paths';
import ReactGA from 'react-ga';

export default function Home() {
    useEffect(() => {
        ReactGA.initialize('UA-37043736-10');
        if (typeof window !== 'undefined') {
        //   ReactGA.pageview(window.location.pathname + window.location.search);
        }
      });
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Paths />
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}