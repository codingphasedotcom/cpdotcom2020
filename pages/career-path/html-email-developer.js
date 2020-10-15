import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../../components/Pricing';
import getUrlParam from '../../components/getParam';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
    ReactGA.addTrackers(
      [
        {
          trackingId: 'UA-37043736-10',
          gaOptions: {
            name: 'original'
          }
        },
        {
          trackingId: 'UA-37043736-16',
          gaOptions: { name: 'version4' }
        }
      ]
    );
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });
  useEffect(() => {
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
        <title>HTML Email Developer Career Path</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="project-jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>HTML EMAIL DEVELOPER</h1>
                  <p>We are the only platform that goes beyond just teaching you how to get a job 
      we focus on skills that are in high demand but also allow you to make your own
      income independently online.</p>
                  <a href="#pricing" className="start-btn">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section id="timeline">
          <div className="container">
            <div className="row g-3">
              
              <div className="col-md-6 ">
              <h2>Courses To Take</h2>
              <p>All courses are set in order in which you need to take them. If you see a 🔥 next to course title they are exclusive to Yearly Members and Career Bundles Owners.</p>
                <div className="courses">
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                      <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/191709">
                          <a>
                            <span className="title">Text Editors</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                      <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/190248">
                          <a>
                            <span className="title">HTML & CSS</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/204451">
                          <a>
                            <span className="title">Terminal For Developers</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/253829">
                          <a>
                            <span className="title">Advance CSS with Flexbox and Grid</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/212881">
                          <a>
                            <span className="title">SASS Like A Pro</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/540733">
                          <a>
                            <span className="title">Git Like A Pro</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/191705">
                          <a>
                            <span className="title">Future Proof Javascript</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/476145">
                          <a>
                            <span className="title">Node and NPM Basics</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/349237">
                          <a>
                            <span className="title">Responsive HTML Emails</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/515146">
                          <a>
                            <span className="title">HTML Emails Frameworks 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/613871">
                          <a>
                            <span className="title">Design Softwares For Developers 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/623459">
                          <a>
                            <span className="title">Freelancer Guide 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img"/>
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/619459">
                          <a>
                            <span className="title">Job Ready: Email Developer 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
                
              </div>
              <div className="col-md-6 jobs">
                <h2>Real Skills For Jobs Check On Indeed</h2>
                <div className="path">
                  <Link href="https://www.indeed.com/jobs?q=title%3Afront%20end%20developer&l&vjk=d8fdabe51ecc95fe">
                    <a target="new">
                    <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="/img/email-dev-jobs.png" className="course-img"/>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h2>What Will You Learn?</h2>
              </div>
              <div className="col-md-9">
                <ul>
                  <li>Convert a Design to HTML and CSS</li>
                  <li>Build a Facebook Clone</li>
                  <li>Responsive Layout With CSS Grid</li>
                  <li>Notifications App</li>
                  <li>Pokemon Rock, Papers, Scissors Battle</li>
                  <li>Product Responsive Email</li>
                  <li>Hotel Chain Responsive Email</li>
                  <li>Deploying Responsive Emails</li>
                  <li>Testing Emails On Litmus</li>
                  <li>Design Software - Photoshop and Sketch</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
        <Pricing location="course" bundleURL=" https://codingphase.teachable.com/p/html-email-developer-career-bundle" bundlePrice="500" couponActive={couponActive}/>
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        a{
          text-decoration: none;
        }
        a:hover{
          color: red !important;
        }
      `}</style>
    </>
  )
}
