import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
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
        <section className="page">
            <div className="container">
                <h1>Terms Of Service</h1>

<h2><span id="1_Terms">1. Terms</span></h2><p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p><h2><span id="2_Use_License">2. Use License</span></h2><ol type="a"><li>Permission is granted to temporarily download one copy of the materials (information or software) on CodingPhase’s web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<br/><ol type="i"><li>modify or copy the materials;</li><li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li><li>attempt to decompile or reverse engineer any software contained on CodingPhase’s web site;</li><li>remove any copyright or other proprietary notations from the materials; or</li><li>transfer the materials to another person or ‘mirror’ the materials on any other server.</li></ol></li><li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by CodingPhase at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li></ol><h2><span id="3_Disclaimer">3. Disclaimer</span></h2><ol type="a"><li>The materials on CodingPhase’s web site are provided ‘as is’. CodingPhase makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, CodingPhase does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</li></ol><h2><span id="4_Limitations">4. Limitations</span></h2><p>In no event shall CodingPhase or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on CodingPhase’s Internet site, even if CodingPhase or a CodingPhase authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p><h2><span id="5_Revisions_and_Errata">5. Revisions and Errata</span></h2><p>The materials appearing on CodingPhase’s web site could include technical, typographical, or photographic errors. CodingPhase does not warrant that any of the materials on its web site are accurate, complete, or current. CodingPhase may make changes to the materials contained on its web site at any time without notice. CodingPhase does not, however, make any commitment to update the materials.</p><h2><span id="6_Links">6. Links</span></h2><p>CodingPhase has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CodingPhase of the site. Use of any such linked web site is at the user’s own risk.</p><h2><span id="7_Site_Terms_of_Use_Modifications">7. Site Terms of Use Modifications</span></h2><p>CodingPhase may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p><h2><span id="8_Governing_Law">8. Governing Law</span></h2><p>Any claim relating to CodingPhase’s web site shall be governed by the laws of the State of Connecticut without regard to its conflict of law provisions.</p>
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