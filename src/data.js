import React from 'react'
import {
  FaDatabase,
  FaDesktop,
  FaReact,
  FaNodeJs,
  FaHtml5,
} from 'react-icons/fa'
import restaurant from './img/restaurant.png'
import random from './img/Random.png'
import music from './img/music.png'
import calculator from './img/Calculator.png'
import landing from './img/landing.png'
import markdown from './img/Markdown.png'
//AiOutlineMail, FaCodepen, FaReact, FaDatabase, FaDesktop, FaCertificate, FaNodeJs
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 5,
    url: '#services',
    text: 'services',
  },
  {
    id: 3,
    url: '#portfolio',
    text: 'projects',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
]

export const data = [
  {
    name: 'Frontend Development',
    icon: <FaDesktop />,
    description:
      'You will get with great usability and elegant design using the latest frontend development methodololgies.',
  },
  {
    name: 'Back end development',
    icon: <FaDatabase />,
    description:
      'You will have a good backend system which will store your data and keep it well organized.',
  },
  {
    name: 'Full stack development',
    icon: <FaDesktop />,
    description:
      'You will have a full functioning MERN stack website with the capabilities of both frontend and backend development',
  },
  {
    name: 'HTML CSS',
    icon: <FaHtml5 />,
    description: 'Websites based on HTML markup language and pure CSS styling ',
  },
  {
    name: 'React',
    icon: <FaReact />,
    description:
      'The React library gives awesome and fast websites based in Javascript and JSX',
  },
  {
    name: 'Node Express',
    icon: <FaNodeJs />,
    description:
      'Nodejs for backend of websites based in express and mongoDb or SQL for the database',
  },
]

export const projectData = [
  {
    image: restaurant,
    name: 'Restaurant Website',
    link: 'https://serene-yalow-9faee3.netlify.app/',
    description: 'HTML CSS project',
  },
  {
    image: music,
    name: 'Music generator',
    link: 'https://codepen.io/Muiruri/pen/KKqpoZK',
    description: 'React Project',
  },
  {
    image: random,
    name: 'Random quote generator',
    link: 'https://codepen.io/Muiruri/pen/oNwgdRg',
    description: 'React project',
  },
  {
    image: calculator,
    name: 'Calculator',
    link: 'https://codepen.io/Muiruri/pen/mdwVmG',
    description: 'React project',
  },
  {
    image: markdown,
    name: 'Markdown Previewer',
    link: 'https://codepen.io/Muiruri/pen/MWowYNB',
    description: 'React project',
  },
  {
    image: landing,
    name: 'Pomodoro clock',
    link: 'https://codepen.io/Muiruri/full/wvqrQPZ',
    description: 'React project',
  },
]

export const categories = [
  {
    name: 'Personal Website',
    description: 'Get a personal website designed according to your needs',
  },
  {
    name: 'Portfolio website',
    description: 'Get a professional portofolio website for your portfolio',
  },
  {
    name: 'Business Website',
    description: 'Get a website for your business and scale your business',
  },
  {
    name: 'Blogs',
    description: 'Have your own blog and get your message out there!',
  },
  {
    name: 'Website maintenance',
    description:
      'Maintain your website and ensure that it is updated and functioning as expected',
  },
  {
    name: 'Website deployment',
    description: 'Deploy your website and host it with a provider',
  },
]

export const singleJob = [
  {
    name: 'Personal Website',
    basic: {
      title: 'Basic',
      basicDesc: '1 page website- Front end',
      price: '$50',
    },
    standard: {
      title: 'standard',
      stndDesc: '3 page website- Front end',
      price: '$100',
    },
    premium: {
      title: 'Premium',
      prmDesc: '6 page website- Front end and backend',
      price: '$300',
    },
  },
  {
    name: 'Portfolio website',
    basic: {
      title: 'Basic',
      basicDesc: '1 page responsive website- Front end',
      price: '$50',
    },
    standard: {
      title: 'standard',
      stndDesc: '3 page customized website- Front end',
      price: '$100',
    },
    premium: {
      title: 'Premium',
      prmDesc:
        '4 page website with backend data storage capabilities-Frontend and backend',
      price: '$200',
    },
  },
  {
    name: 'Business Website',
    basic: {
      title: 'Basic',
      basicDesc: '1 page landing page- Front end',
      price: '$100',
    },
    standard: {
      title: 'standard',
      stndDesc: '3 page business website- Front end and backend',
      price: '$200',
    },
    premium: {
      title: 'Premium',
      prmDesc:
        '6 page business website with authentication-Frontend and backend',
      price: '$300',
    },
  },
  {
    name: 'Blogs',
    title: 'Blog website',
    desc: 'Blog website that enables you to share your content and interact with your users',
    price: '$80',
  },
  {
    name: 'Website maintenance',
    title: 'BMaintenance',
    desc: 'Maintain your website to ensure high security, performance and user experience',
    price: '$20',
  },
  {
    name: 'Website deployment',
    title: 'Hosting',
    desc: 'Deploy your website and host it on the cloud with a hosting provider',
    price: '$10',
  },
]
