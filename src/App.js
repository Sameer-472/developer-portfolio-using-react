import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Education } from "./Components/Education/Education";
import { Projects } from "./Components/Projects/Projects";
import { useState } from "react";
import { Contact } from "./Components/Contact/Contact";

function App() {
    // this function will reterieve data from the nav dark toggle button and change the color 
    const [state, setstate] = useState(false)
    const callBackFunction = (prop) => {
        setstate(prop)
        console.log(prop)
    }
    return ( <
        >
        <
        div className = { state ? "darkMode" : "lightMode" } >
        <
        Router >
        <
        Nav parent = { callBackFunction }
        /> <
        Header / >
        <
        Skills / >
        <
        Education / >
        <
        Projects / >
        <
        Contact / > <
        Switch >
        <
        Route path = "/home"
        exact element = { < Header / > }
        />{" "} <
        Route path = "/skills"
        element = { < Skills / > }
        />
        // <Route path="/" element={Nav} />
        <
        /Switch>{" "} < /
        Router > { " " } <
        /div>{" "} < / >
    );
}

export default App;