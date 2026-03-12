import React from 'react';
import './Home.css';

import { useState, useRef } from 
'react';
import Work from './components/Work';
import workExperience from './constants/work';
import myProjects from './constants/projects';
import Card from './components/Card';

import PatrickPhoto from './images/full.jpg';
import face from './images/face.JPG';
import copy from './images/copy.png';
import hand from './images/hand.png';

const Home = () => {
    console.log(workExperience);
    const [projectsToShow, setProjectsToShow] = useState(myProjects.slice(0, 2));
    const [currentWorkExperience, setCurrentWorkExperience] = useState(workExperience.slice(0, 2));
    console.log('yo')
    const toggleWorkExperience = () => {
        if (currentWorkExperience.length === 2) {
            setCurrentWorkExperience(workExperience);
        }
        else {
            setCurrentWorkExperience(workExperience.slice(0, 2));
        }
    }

    const toggleProjects = () => {
        if (projectsToShow.length === 2) {
            setProjectsToShow(myProjects);
        } else {
            setProjectsToShow(myProjects.slice(0, 2));
        }
    }

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
            {/* <a className='aboutLink' href='/blog'>
                read blog
            </a> */}
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
            </div >
            <div class="custom-shape-divider-top-1702400715">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="busSect">
                <div className='busSectTopHolder'>
                    <div className="busSectHeader">
                        <div className='codeHeaderHolder'>
                                <h2>Experiences</h2>
                                <button onClick={toggleWorkExperience}>Show {currentWorkExperience.length === 2 ? 'All Experiences ⬇️' : 'Less'}</button>
                        </div>
                        <hr id='hr1' />
                    </div>
                    
                </div>
                <div className="internshipsChunk">
                    {currentWorkExperience.map((work) => {
                        return (
                        <Work title={work.title} text={work.text} image={work.image} timeLine={work.timeLine} key={work.title}/>
                        )
                    })}
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
                        <div className='codeHeaderHolder'>
                            <h2 id="codeh2">Projects</h2>
                            <button onClick={toggleProjects}>Show {projectsToShow.length === 2 ? 'All Projects ⬇️' : 'Less'}</button>
                        </div>
                        <hr id='hr2' />
                    </div>
                </div>
                <div id="codingChunks">
                    {
                        projectsToShow.map((project, index) => {
                            return <Card text={project.text} isVideo={project.isVideo} links={project.links} image={project.image} title={project.title} key={project.title}/>
                        }
                        )
                    }
                </div>
                <div className="custom-shape-divider-bottom-1645907450">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                            className="shape-fill"></path>
                    </svg>
                </div>
            </div >
            <div className="teenager" style={{ position: "relative" }}>
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
            <div className="bott">
                <div className="goodbye">
                    <div id='waveDiv'>
                        <h1 className="toph1">Bye!</h1>
                        <img src={hand} alt="" className='wave' />
                    </div>
                    <img src={face} alt="goodbye photo" id="byeImg" />
                </div>
                <div className="container">
                    <div className="label">
                        <h5>Lets Get in Touch:</h5>
                    </div>
                    <div className='contact-container'>
                        <div className="copy-text" ref={copyTextEl}>
                            <input type="text" className="text" value='patrick.123.foster@gmail.com' ref={inputEl} readonly />
                            <button onClick={handleCopyClick}>
                                <img src={copy} alt="vlaid" id='copyImage' />
                            </button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 512 512" id='linkedin' 
                                        onClick={() => {window.open('https://www.linkedin.com/in/patrickrfoster', '_blank')}}>
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" className='shape-fill-white'/>
                    </svg>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
