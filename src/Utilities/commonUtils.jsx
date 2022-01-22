import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ContactMe from "../components/ContactMe/ContactMe";


export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About Me",
        component: AboutMe
    },
    {
        screen_name: "Projects",
        component: Projects
    },
    {
        screen_name: "Skills",
        component: Skills
    },
    {
        screen_name: "Contact Me",
        component: ContactMe
    }
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return;

    for(let i = 0; i < TOTAL_SCREENS.length; i++)
    {
        if(TOTAL_SCREENS[i].screen_name === screen_name)
        return i;
    }

    return;
}