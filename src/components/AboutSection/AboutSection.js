import React from 'react'
import './AboutSection.scss'
import AJJ from './aj.jpg'


const AboutSection = () => {
    return (
        <div className="mainAbout">
            <div className="aboutText">
                <h2>About <span> Anthony J. Johnson </span></h2>
                <p>Anthony J. Johnson, from Miami, FL. I am humble and always learning but yet I am very confident in what I do, I belive in hard work & Fun, I know it's a little contradicting, but I also believe you have to love what you do and if that statement is true then its always fun to work hard.</p>
                <p>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable. Using the latest in HTML, Css, Javascript, Node.js, Less, and more</p>
            </div>
            <div className="aboutImg">
                <div className="imgBox">
                    <img className="img-aj" src={AJJ} alt="Anthony Jarod Johnson" />
                </div>
            </div>

        </div>
    )
}


export default AboutSection