import actively from '../images/actively.png'
import wordsmith from '../images/wordsmith.png'
import summarized from '../images/summ.png'
import lecture from '../images/lecture.png'
import vidify from '../images/vidify.png'
import remote from '../images/swipe.mov'

const myProjects = [
    {
        title: 'Google Chrome AI Writing Assistant',
        text: "An AI writing assistant chrome extension that enables users to effortlessly enhance the quality of their writing by highlighting text and accessing rewriting options in their browser. This full-stack application was built with including Javascript, React, Typescript, Express, NodeJS, Manifest V3, and MongoDB.",
        image: wordsmith,
        isVideo: false,
        links: [{
            text: 'Website', href: 'https://try-wordsmith.netlify.app/'
        },
        {
            text: 'Github', href: 'https://github.com/paaatrrrick/wordsmith-client'
        },
        {
            text: 'Chrome Extension', href: 'https://chrome.google.com/webstore/detail/wordsmith/ffjginbaonjceegjiapjgopplicfpbcm'
        }]
    },
    {
        title: 'Tennis Match Finder',
        text: 'Actively was a sports meetup startup I acted as the the CTO and sole developer of. Actively allows users to post and join nearby sports matches. Users can find friends, join groups, and see local matches to help them find perfect competition.',
        image: actively,
        isVideo: false,
        links: [{ text: 'Github', href: 'https://github.com/paaatrrrick/Actively' }]
    },
    {
        title: 'Sum thing summarized',
        text: 'Sum thing summarized was our project for the 2022 UIowa Hackathon, where our team placed third. Sum thing summarized is a chrome extension that allows users to summarize any webpage they are on. It also generated quiz questions based on their content.',
        image: summarized,
        isVideo: false,
        links: [{ text: 'Github', href: 'https://github.com/paaatrrrick/sumthingsummarize' }]
    },
    {
        title: 'Facilitation Scheme Visualization Research',
        text: "I enrolled in a research group that was investigating the efficacy of various chemistry teacher approaches. I devoted a section of the term devising a graphing software that could render graphical representations of data on instructors' communication techniques.",
        image: lecture,
        isVideo: false,
        links: []
    },
    {
        title: 'Lecture Video Analytics',
        text: 'This project served as my introduction into full-stack web development, sharpening my new skills. It enabled teachers to upload lecture videos to our website and track student viewership.',
        image: vidify,
        isVideo: false,
        links: [{ text: 'Github', href: 'https://github.com/paaatrrrick/Vidify' }]
    },
    {
        title: 'Hand Gesture Remote',
        text: 'I used OpenCV and Linear Regression to create a hand gesture remote that can be used to control a TV. This project was a lot of fun to work on and I learned a lot about computer vision.',
        image: remote,
        isVideo: true,
        links: [{ text: 'Github', href: 'https://github.com/paaatrrrick/Hand-Gesture-Remote' }]
    },
]


export default myProjects;