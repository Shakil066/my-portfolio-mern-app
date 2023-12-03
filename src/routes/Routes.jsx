import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage";
import AboutMe from "../pages/AboutMe";
import Projects from "../components/Projects/Projects";
import ProjectAll from "../components/Projects/ProjectAll";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects/:id',
                element: <Projects></Projects>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/about-me',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/all-projects',
                element: <ProjectAll></ProjectAll>
            }
        ]
    },

]);


export default router;