import React from 'react';
import './Home.css';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import swipe from './images/swipe.mov'
import myProjects from './constants/projects';
import Card from './components/Card';

import PatrickPhoto from './images/full2.jpeg'
import TechstarsLogo from './images/techstars-logo-vector.png'
import SpeechifyLogo from './images/speechify.png'
import fullTS from './images/fullTS.JPG'
import jp from './images/jp.jpeg'
import godaddy from './images/gd.png'
import iowa from './images/iowa.png'
import face from './images/face.JPG'
import copy from './images/copy.png'
import hand from './images/hand.png'

const Home = () => {
    const inputEl = useRef(null);
    const copyTextEl = useRef(null);


    const handleCopyClick = () => {
        inputEl.current.select();
        document.execCommand("copy");
        copyTextEl.current.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(() => {
            copyTextEl.current.classList.remove("active");
        }, 2500);
    };




    return (
        <div className="home">
            <div className="top" style={{ position: "relative" }}>
                <div className="h1s">
                    <ul className='headingText'>
                        <li style={{ "--clr": "#ffdd1c" }}>
                            <a href="#" data-text="&nbsp;Hello,">&nbsp;Hello,</a>
                        </li>
                        <li style={{ "--clr": "#40BB94" }}>
                            <a href="#" data-text="&nbsp;I'm">&nbsp;I'm</a>
                        </li>
                        <li style={{ "--clr": "#4567DB" }}>
                            <a href="#" data-text="&nbsp;Patrick">&nbsp;Patrick</a>
                        </li>
                    </ul>
                </div>
                <img src={PatrickPhoto} alt="pciture of Patrick" id="fullBody" />
                <div className="custom-shape-divider-bottom-1645906219">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"></path>
                    </svg>
                </div >
            </div >
            <div className="busSect">
                <div style={{
                    width: "94%",
                    marginLeft: "3%",
                    marginBottom: '150px',
                    marginTop: '50px'
                }}>
                    <h2>Software Internships </h2>
                    <hr id='hr1' />
                </div>
                <div className="internshipsChunk">
                    <div className="internshipCard">
                        <div>
                            <img src={godaddy} alt="GoDaddy" />
                            <p className='bold2'><span className='bold '>GoDaddy Software Engineer Intern: </span>
                                <br />
                                In the Summer of 2023, I spent in Seattle, Washington, being a full stack developer on GoDaddy's checkout team. Every day I implemented, I developed features to be tested to see if they made the cart a more seamless experience. GoDaddy's cart is essential to the business success. Every day, the cart has tens of thousands of visitors; even a small mistake could have a large financial impact on the business. Writing high-quality and bug-free code was essential to the team's success. 
                            </p>
                        </div>
                        <p className='internshipDate'>Summer 2023</p>
                    </div>
                    <div className="internshipCard">
                        <div>
                            <img src={jp} alt="JP Morgan Chase" />
                            <p className='bold2'><span className='bold '>J.P. Morgan Chase Software Engineer Intern:</span>
                                <br />
                                In the Summer of 2022, I spent in Chicago working at JPMorgan as a Software Developer Intern. I was tasked with converting two legacy UI applications in Ember JS to React.js. This conversion involved 12 API calls, 90% test coverage with Jest, implementing a dark theme, and using their React toolkit. I grew immensely as a developer by learning the React ecosystem and programming with a team.
                            </p>
                        </div>
                        <p className='internshipDate'>Summer 2022</p>
                    </div>
                </div>
            </div>
            <div className="codeSect" style={{ position: "relative" }}>
                <div className="custom-shape-divider-top-1645907307">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
                <div className="codeSectInside">
                    <div id="codeTop">
                        <h2 id="codeh2">Programming</h2>
                        <hr id='hr2' />
                    </div>
                    <h4> React - LLMs - Typescript - Python - Java - NodeJS - SQL</h4>
                </div>
                <div id="codingChunks">
                    {
                        myProjects.map((project, index) => {
                            return <Card text={project.text} isVideo={project.isVideo} links={project.links} image={project.image} title={project.title} />
                        }
                        )
                    }
                </div>
                <div class="custom-shape-divider-bottom-1645907450">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                            class="shape-fill"></path>
                    </svg>
                </div>
            </div >
            <div class="teenager" style={{ position: "relative" }}>
                <div class='teenageTopStuff'>
                    <h2>Business & School</h2>
                    <hr id='hr1' />
                </div>
                <div className="ts section">
                    <img src={TechstarsLogo} alt="ts" id="tsLogo" />
                    <div className="holderDiv" >
                        <img src={fullTS} alt="ts" id="bigTs" />
                        <p>Techstars is a tech startup accelerator that handpicks the ten best companies nationwide
                            to participate in its three-month growth program. I worked with two of these cohorts 
                            through the Des Moines Location, making each company a financial
                            model. These models created adjustable five-year
                            forecasts of the company's income statement, cash flow, and balance sheet. Additionally,
                            I streamlined our company's sourcing funnel and facilitated
                            interviews. Thank you to <a href="https://www.linkedin.com/in/kertylevy/">Kerty Levy</a>, <a
                                href="https://benmcdougal.com/">Ben McDougal</a>, and <a
                                    href="https://www.linkedin.com/in/tjsalyars/">TJ Salyars</a> for their mentorship. <br />
                            <br /> Aug 2020 - Dec 2021
                        </p>
                    </div>
                </div>
                <div className="speechify section">
                    <h3 id="speechH3">Speechify</h3>
                    <div className="holderDiv">
                        <p id="speechifyText"> Speechify is a chrome extension that reads text information on websites, and
                            their
                            voices are
                            nearly indistinguishable from human voices. Unsurprisingly, they have
                            hockey puck growth and are hiring like crazy. I was fortunate enough to be a part of that team
                            scaling Speechify. Every day I built relationships with news applicants, helping to hire top talent.
                            <br /> <br /> Dec 2021 - Mar 2022
                        </p>
                        <img src={SpeechifyLogo} alt="ts" id="speechifyImg" />

                    </div>
                </div>
                <div className="ts section">
                    <h3 id="iowaH3">The University of Iowa</h3>
                    <div className="holderDiv" >
                        <img src={iowa} alt="ts" id="speechifyImg" />
                        <div className="iowaDiv">
                            <ul>
                                <li>Studying Comp Sci B.S. 📚</li>
                                <li>BBA Business Analytics 🧑‍🎓</li>
                                <li>I dabble in pickleball 🏃‍♂️</li>
                            </ul>
                            <ul className='bigMarginlEft'>
                                <li>Used to Run a Bit 🏃‍♂️</li>
                                <li>Eagle Scout 🦅</li>
                                <li>5th Grade Chess Champion ♟</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1645906604">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" className="shape-fill"></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" className="shape-fill"></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div class="bott">
                <div class="goodbye">
                    <div id='waveDiv'>
                        <h1 class="toph1">Bye!</h1>
                        <img src={hand} alt="" class='wave' />
                    </div>
                    <img src={face} alt="goodbye photo" id="byeImg" />
                </div>
                <div class="container">
                    <div class="label">
                        <h5>Contact:</h5>
                    </div>
                    <div class="copy-text" ref={copyTextEl}>
                        <input type="text" class="text" value='patrick.123.foster@gmail.com' ref={inputEl} readonly />
                        <button onClick={handleCopyClick}>
                            <img src={copy} alt="vlaid" id='copyImage' />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
