import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Paths from '../components/Paths';
import MainLayout from '../components/layouts/MainLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../components/Pricing';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import getUrlParam from '../components/getParam';
import ls from 'local-storage';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  const [affiliateActive, setAffiliateActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
     
     
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);
  
  useEffect(() => {
    // handle coupon
    if(getUrlParam('coupon') != ''){
      setCouponActive({
        status: true,
        coupon: getUrlParam('coupon'),
        percent: parseInt(getUrlParam('coupon').substring(0, 2))
      })
       ls.set('coupon', getUrlParam('coupon'))
    }else{
      ls.remove('coupon');
    }
    if(ls('coupon') != null) {
      setCouponActive({
        status: true,
        coupon: ls('coupon'),
        percent: parseInt(ls('coupon').substring(0, 2))
      })
    }
    //handle affiliate
    if(getUrlParam('affcode') != ''){
      setAffiliateActive({
        status: true,
        affcode: getUrlParam('affcode')
      })
      ls.set('affcode', getUrlParam('affcode'))
    }else{
      // ls.remove('affcode');
    }
    if(ls('affcode') != null) {
      setAffiliateActive({
        status: true,
        affcode: ls('affcode')
      })
    }

  }, []);
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
      
        <section className="jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>Learn The Skills
      You Need To Become
      A Profitable Developer</h1>
                  <p>We are the only platform that goes beyond just teaching you how to get a job 
      we focus on skills that are in high demand but also allow you to make your own
      income independently online.</p>
                  <AnchorLink href='#pricing' offset={() => -800} className="start-btn">Start Now</AnchorLink>
                  {/* <a href="#pricing" className="start-btn">
                    Start Now
                  </a> */}
                </div>
              </div>
              <div className="col-md-6 align-middle">
                <div className="right-info">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/money-vector.png"/>
                  
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <Paths/>
        <section id="foursteps">
          <div className="container">
            <h5>How We Teach</h5>
            <h4>The 4 Steps to Make You Succeed!</h4>
            <p>Discover How Hundreds of Students Have Learned Enough Coding Skills to Build Impressive Programs, Quit Their Dead- end Jobs, Spark High-Paying Tech Careers, and Double Their Income…</p>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img"/>
                  <span className="title">Build Real Projects</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="step-img"/>
                  <span className="title">Learn How To Make Income While You Continue To Learn</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="step-img"/>
                  
                  <span className="title">Build A Solid Portfolio Like A Pro</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img"/>
                  <span className="title">Land The Dream Job and Have Side Income!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whyus">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="image-highlight">
                  <div className="gradient-bg"></div>
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/joe-highlight.png"/>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Experience</h3>
                <ul>
                  <li>8 Years Of Professional Experience</li>
                  <li>Self-taught so we know what it takes to learn at home</li>
                  <li>Over $500,000/yr independent income from development and will teach you the strategies that has helped me achieve this.</li>
                </ul>
                <span className="total-students">65,000</span>
                <span className="sub-total">Students Worldwide</span>
                <span className="who-hired">WHO HIRED OUR STUDENTS</span>
                <div className="logos">
                
                <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/fedex.png"/>
                    <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/nasa.png"/>
                <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/paypal.png"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pricing location="home" couponActive={couponActive} affiliateActive={affiliateActive} />
        <script async data-uid="2f89e66125" src="https://codingphase.ck.page/2f89e66125/index.js"></script>
      </MainLayout>
      <style jsx>{`
        
        
        

      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}
