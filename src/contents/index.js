import bootstrap from '../assets/bootstrap.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import question from '../assets/question.png'
import desk from '../assets/desk.jpg'
import movie from '../assets/movieapp.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import foodmap from '../assets/foodmap.png';
import personalfirst from '../assets/personalfirst.png'
import tracking from '../assets/tracking.png'
export const navLinks = ["Home","About","Projects","Contact"];

export {bootstrap,css,html,javascript,tailwind,react,question,desk,linkedin,github,foodmap};


export const projects = [
    {
        image : tracking,
        name : "Stock Market Tracking System",
        date : "October 2023",
        explanation : "I created a tracking budget system with React, Axios, Context API and Tailwind CSS. For design I solve UI/UX problems.Currently I am improving this app.",
        techone : "React",
        techtwo : "Tailwind",
        github : "",
        demo :"",
    }
    ,
    {
    image : movie,
    name: "Movie Recommendation Application",
    date : "February 2023",
    explanation : "I've launched a movie website using React, Axios, Context API, and Tailwind CSS. It's designed with Colorhunt's best color choices for a great first impression. I'm planning to upgrade to version 2 by integrating a ChatGPT-based movie recommendation system.",
    techone : "React",
    techtwo : "Tailwind",
    github : "https://github.com/SaidARSLAN/movieMinds",
    demo : "https://moviesmind.netlify.app/"
    },
    {
        image : foodmap,
        name : "Resturant App",
        date : "February 2023",
        explanation : "I created food selling website using React, Context API and Tailwind.CSS. It's designed my choice's colors. There are a lot of functionalities in this app. Currently I keep developing this website",
        techone : "React",
        techtwo : "Tailwind",
        github : "https://github.com/SaidARSLAN/restaurantMenu",
        demo : "https://cocafood.netlify.app/"
    },
    {
        image:personalfirst,
        name : "Personal Portfolio First",
        date : "May 2023",
        explanation : "I created first portfolio with Vanilla JS and Vanilla CSS. This one was my first experience build website from zero. I use some javascript and css animations which are I created",
        techone : "Vanilla JS",
        techtwo : "Vanilla CSS",
        github : "https://github.com/SaidARSLAN",
        demo : "https://saidarslan.netlify.app/",
    }
]