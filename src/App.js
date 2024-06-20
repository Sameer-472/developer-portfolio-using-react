import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Education } from "./Components/Education/Education";
import { Projects } from "./Components/Projects/Projects";
import { useState } from "react";
import { Contact } from "./Components/Contact/Contact";
import "./index.css";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";
import { Experience } from "./Components/Experience/Experience";

function App() {
    // this function will retrieve data from the nav dark toggle button and change the color 
    // const [state, setState] = useState(false);
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    const callBackFunction = (prop) => {
        setIsDarkMode(prop);
    };

    

    return (
        <div className={`${isDarkMode ? "darkMode" : "lightMode" } bg-fixed bg-cover bg-no-repeat min-h-screen min-w-full px-24`}>
            <Router>
                <Nav parent={callBackFunction} />
                <Header />
                <Skills />
                <Experience/>
                <Projects />
                {/* <Education /> */}
                <Contact />
                <Switch>
                    <Route path="/home" exact element={<Header />} />
                    <Route path="/skills" element={<Skills />} />
                    {/* <Route path="/" element={Nav} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
