import React from 'react'
import '../Spotify/Box.css'

const Box = () => {
  return (
    <div>
       <section className='section2'>
             <h1>Questions?</h1>
             <h3>We’ve got answers</h3>
             <ul>
              <li className='li1'>
                <details id='details1'>
                  <summary id='summary1'>
                    <div id='div1'>Am I eligible for this plan?</div>
                      <svg data-encore-id="icon" role="img" aria-hidden="true" id='svg1' data-sentry-element="ExpandIcon" data-sentry-source-file="question.tsx" viewBox="0 0 24 24">
                        <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414"></path>
                      </svg>
                  </summary>
                  <p id='p5'>If you are a student enrolled at an accredited college or university, and above the age of 18, then yes. <br />You can get Premium Student for up to 4 years.</p>
                </details>
              </li>
              <li className='li2'>
                <details id='details2'>
                  <summary id='summary2'>
                    <div id='div2'>How do you verify that I’m a student?</div>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" id='svg2' data-sentry-element="ExpandIcon" data-sentry-source-file="question.tsx" viewBox="0 0 24 24">
                      <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414"></path>
                    </svg> 
                  </summary>
                  <p id='p6'>We verify your enrollment status through a third-party service called SheerID. Learn more.</p>
                </details>
              </li>
              <li className='li3'>
                <details id='details3'>
                  <summary id='summary3'>
                    <div id='div3'>What happens to my account when I graduate or leave school?</div>
                    <svg data-encore-id="icon" role="img" aria-hidden="true" id='svg3' data-sentry-element="ExpandIcon" data-sentry-source-file="question.tsx" viewBox="0 0 24 24">
                        <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414"></path>
                    </svg>
                  </summary>
                  <p id='p7'>You’ll continue to get access to Premium Student, for up to 12 months from the date you subscribed or last re-verified, <br />while  it’s available. If you’re no longer a student at the end of that period, you’ll no longer be eligible for Premium <br />Student.Your subscription will then automatically switch to a Premium Standard plan at the then-current price per month, <br />unless you cancel beforehand.</p>
                </details>
              </li>
             </ul> 
        </section>

    </div>
  )
}

export default Box