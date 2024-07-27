import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./Components/Projects/Projects";
import { useEffect } from "react";
import { Contact } from "./Components/Contact/Contact";
import "./index.css";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
import { Experience } from "./Components/Experience/Experience";
import AOS from "aos";
import { Blogs } from "./Components/Blogs/Blogs";
import PageNotFound from "./Components/PageNotFound";
import LandingPage from "./Pages/LandingPage";


function App() {


    useEffect(() => {
        AOS.init({
            duration: 500, // You can set global settings here
            easing: 'ease-in-out-quart',
            once: true, // Ensure animations happen only once
        });
    }, []);
    // this function will retrieve data from the nav dark toggle button and change the color 
    // const [state, setState] = useState(false);
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    const callBackFunction = (prop) => {
        setIsDarkMode(prop);
    };



    return (
        <>
            <div className={`${isDarkMode ? "darkMode" : "lightMode"} bg-fixed bg-cover bg-no-repeat min-h-screen min-w-full`}>
                <Nav parent={callBackFunction} />
                <div>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/home" exact component={LandingPage} />
                            {/* <Route path="/skills" component={Skills} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/blogs" component={Blogs} />
                            <Route path="/contact" component={Contact} /> */}
                            {/* 404 Route */}
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
