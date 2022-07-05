// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Component/NavBar/Navbar.jsx"
import {BrowserRouter} from "react-router-dom"
import {MainDiv} from "./AppElement"
// import Intro from "./Component/Introduction/Intro.jsx";
import About from "./Component/AboutMe/About.jsx";

import SkillsRating from "./Component/Skills/SkillsRating.jsx";
import MoreAbout from "./Component/MoreAboutMe/MoreAbout.jsx";
import HeroSection from "./Component/Hero/HeroSection.jsx";
import Projects from "./Component/Project/Projects.jsx";
// import Contact from "./Component/ContactUs/Contact.jsx";
// import Projects from "./Component/Project/Projects.jsx";
import ContactMe from "./Component/Hero/Contact/ContactMe.jsx";
import Footer from "./Component/Footer/Footer.jsx"
import SkillLogo from "./Component/SkillsLogo/SkillLogo.jsx";
function App() {
  // const imgStart=false
  return (
  

<MainDiv>
 <BrowserRouter>

 
 <Navbar/>
 <HeroSection/>
 <About/>
{/* <Intro imgStart={imgStart}/> */}
 <SkillLogo/>
 <SkillsRating/>
 <SkillLogo/>
 <MoreAbout/>
 <Projects/>
<ContactMe/>
<Footer/>
 </BrowserRouter>
</MainDiv>


  );
}

export default App;
