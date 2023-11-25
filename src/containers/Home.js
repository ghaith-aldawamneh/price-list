import React, {useEffect, useState,useContext} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Services from "./CardPhotos/Services";
import Techs from "./CardPhotos/Techs";
import Prices from "./CardPhotos/Prices";
import Map_main from "./CardPhotos/Map_main";
import Map from "./CardPhotos/Map";
import Contactme from "./CardPhotos/Contactme";
import Inventor from "./CardPhotos/Inventor";
import Table from "./CardPhotos/Table";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Main.scss";
import {Langsar, germany,english} from "./Langs";
import StyleContext from "../contexts/StyleContext";

const Home = () => {
  const {page1,page2} = useContext(StyleContext);//Langsar.intro_content

//row justify-content-center pb-5 mb-3   false and false
  return (
    <>
    <Header />
    {!(page1 || page2) && <Greeting />}
    {!(page1 || page2) &&<Table />}

    <Contactme/>
    {(page1 || page2) &&<Greeting />}


    {!(page1 || page2) &&<Inventor />}
    {!(page1 || page2) &&<Profile />}
    <Footer />
    <ScrollToTopButton />
    </>
  );
};

export default Home;