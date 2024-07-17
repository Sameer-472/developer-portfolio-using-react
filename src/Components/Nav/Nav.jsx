import React, { useState, useEffect } from "react";
import "./Nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/core/SwitchUnstyled';
import { animateScroll as scroll, Element } from 'react-scroll'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 62px;
  height: 34px;
  padding: 7px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')(
  ({ theme }) => `
  position: absolute;
  display: block;
  background-color: ${theme.palette.mode === 'dark' ? '#003892' : '#001e3c'};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 1px;
  left: 7px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>') center center no-repeat;
  }

  &.focusVisible {
    background-color: #79B;
  }

  &.checked {
    transform: translateX(16px);
    
    &:before {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
    }
  }
`,
);

const SwitchTrack = styled('span')(
  ({ theme }) => `
  background-color: ${theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
`,
);

function MUISwitch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

const Nav = (props) => {
  <Element name="Skills"></Element>
  const [state, setState] = React.useState(true);
  const [btn, setbtn] = React.useState(false);

  // this prop is sending the data to App.js file
  const [color, setcolor] = useState(true)

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleColor = () => {
    props.parent(color);
    setcolor(!color);
  }

  const togglebtn = () => {
    setState(!state);
    setbtn(!btn);
  }

  const scrollToSkill = () => {
    scroll.scrollTo(500)
  }
  const scrollToProject = () => {
    scroll.scrollTo(1600)
  }
  const scrollToContact = () => {
    scroll.scrollTo(4000)
  }
  const scrollToCarrers = () => {
    scroll.scrollTo(900)
  }
  const scrollToBlogs = () => {
    scroll.scrollTo(2300)
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        <nav className={visible ? "nav" : "hiddenNav"}>
          <div className="header">
            <img src="../../Images/signature.png" className="mobsignature" alt="" />
            <MenuIcon fontSize="large" id={btn ? "button" : "notbutton"} onClick={togglebtn} />
            <ClearIcon fontSize="large" id={btn ? "cross" : "notcross"} onClick={togglebtn} />
          </div>
          <ul className={`${state ? "desktopNav" : "mobileNav"} justify-evenly`}>
            <img src="../../Images/signature.png" className="signature" alt="" />

            <div className="flex flex-row mt-3">
              <Link className="font-semibold" to="/home"><li>Home</li></Link>
              <Link className="font-semibold" to="/project" onClick={scrollToProject} duration={50} smooth={false} > <li>Projects</li> </Link>
              <Link className="font-semibold" to="/skills" onClick={scrollToSkill} duration={50} smooth={false} > <li>Skills</li> </Link>
              <Link className="font-semibold" to="/carrer" onClick={scrollToCarrers} duration={50} smooth={false} > <li>Career</li> </Link>
              <Link className="font-semibold" to="/carrer" onClick={scrollToBlogs} duration={50} smooth={false} > <li>Blogs</li> </Link>
              <Link className="font-semibold" to="/contact" onClick={scrollToContact} duration={50} smooth={false} > <li>Contact Me</li> </Link>
            </div>
            {/* <MUISwitch onChange={toggleColor} /> */}
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default Nav;
