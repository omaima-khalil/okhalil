import React from "react";
import Typed from "react-typed";
import {Link} from "gatsby"
import Container from "./Container";


const Hero=() => {
  return(
    <section className="header-wrapper">
      <Container>
  
  <div className="">
    <div className="main-info">
      <h1>Hi, I'm Omaima Khalil</h1>
      <p>I'm a software engineer and writer. This website is my digital garden — a compendium of the things I've learned and created over the years 👇👇👇</p>
      <Typed
        className="typed-text"
        strings={[ "Web Development", "DevOps","Problem Solving"]}
        typeSpeed={40}
        backSpeed={60}
        loop
      />

    <Link smooth={true} to="about" offset={-110} className="btn-main-offer nav-link" href="#">contact me</Link>
    </div>
   
</div>
</Container>

</section>

  )
}
export default Hero;
