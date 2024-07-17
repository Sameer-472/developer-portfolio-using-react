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
                <div className="px-24">
                    <Router>
                        <Header />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Blogs />
                        <Contact />
                        <Switch>
                            <Route path="/home" exact element={<Header />} />
                            <Route path="/skills" element={<Skills />} />
                            {/* <Route path="/" element={Nav} /> */}
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
}

export default App;
