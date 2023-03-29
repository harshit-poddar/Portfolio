import {
  data,
  lib,
  mobile,
  backend,
  creator,
  web,
  javascript,
  ml,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  meta,
  music,
  carrent,
  jobit,
  tripguide,
  dl,
  sql,
  python,
  pytorch,
  tf,
  purchase

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Data Science Enthusiast",
    icon: mobile,
  },
  {
    title: "Web Developer for fun",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ML",
    icon: ml,
  },
  {
    name: "DL",
    icon: dl,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "TF",
    icon: tf,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Credit card Defaulter",
    company_name: "Github",
    github: "https://github.com/harshit-poddar/Credit-card-Defaulter-",
    icon: data,
    iconBg: "#383E56",
    date: "End to end classification application using Xgboost and Naive bayes as the base model for classification with Kmeans to find clusters.",
    points: [
      "End to end application for classifying credit card defaulter",
      "Followed complete Ml lifecycle. Divided training data into clusters using Kmeans, train all model for each cluster and select the best model for each cluster by comparing the accuracy score.",
      "Implemented modular classes for each step individually like preprocessing, clustering, model training, model tuning, model selection and prediction",
      "Do check out the code, demo video and app"
    ],
  },
  {
    title: "Music Generation using Deep learning",
    company_name: "Github",
    github: "https://github.com/harshit-poddar/Music-generator",
    icon: music,
    iconBg: "#E6DEDD",
    date: "Simple piano music genrated using LSTM model trained on sequential data of 100 midi files.",
    points: [
      "Used music21 library for detecting notes and chords from music files.",
      "Prepared supervised training data for model after extracting notes and chords from songs and arranged them sequentially",
      "We have trained our LSTM model on 60,746 training points with 100 sequences and 1 labelled data for 100 epochs",
      "Generated stream score having 200 sequences using model and generate a midi file from the predicted sequence of notes and chords.",
    ],
  },
  {
    title: "Python Library for Mini batch Gradient Descent regression.",
    company_name: "Github",
    github: "https://github.com/harshit-poddar/mbgdregressor-Library",
    icon: lib,
    iconBg: "#383E56",
    date: "My own python library to implement mini batch gradient descent which will be useful while working with linear regression on dataset.",
    points: [
      "By default sklearn don't have any dedicated class for mini batch gradient regressor",
      "Sklearn has SGD regressor that is to implement stochiastic gradient descent.",
      "Just used the intution and simple mathematics behind the concept of mini batch gradient descent to implement this library."
    ],
  },
  {
    title: "Customer Analytics",
    company_name: "Github",
    github: "https://github.com/harshit-poddar/CustomerAnalytics",
    icon: purchase,
    iconBg: "#E6DEDD",
    date: "Complete EDA and model building on consumer dataset of FMCG comapany to predict purchase probability, brand choice probability and purchase quantity of goods by the segmented consumer groups.  ",
    points: [
      "Preprocess the customer data and segment them into four separate groups or cluster on basis of their purchsing behaviour using Kmeans clustering.",
      "Analysed buying behaviour as well as brand choice of each segment.",
      "Used logistics regression to find purchase probability by each segment using price elasticity."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };