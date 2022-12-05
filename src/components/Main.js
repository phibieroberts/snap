import React from 'react'
import Header from "./Header"
import mobile from "../images/image-hero-mobile.png";
import desktop from "../images/image-hero-desktop.png"
import audiophile from "../images/client-audiophile.svg";
import databiz from "../images/client-databiz.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";
import "./main.css"
function Main() {
  return (
    <>
    <Header />
    <div id='hero-section'>
        <div className="hero-text">
            <h1>Make remote work</h1>
            <p>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>

  <button id='learn-more'>Learn more</button>

  <ul>
    <li><img src={databiz} alt="" /></li>
    <li><img src={audiophile} alt="" /></li>
    <li><img src={meet} alt="" /></li>
    <li><img src={maker} alt="" /></li>
  </ul>
        </div>
        <div className="hero-img">
            <picture>
        <source media='(min-width:768px)' srcSet={desktop} />
        <img src={mobile} alt="anything for you" />
        </picture>
        </div>
    </div>
    </>
  )
}

export default Main