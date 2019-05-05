import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Nav.scss';



class Nav extends React.Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };

      

      componentDidMount= () => {

        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
    
      }



      componentDidMount= () => {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      };
      scrollToTop= () => {
        scroll.scrollToTop();
      }
      scrollToBottom= () => {
        scroll.scrollToBottom();
      }
      scrollTo= () => {
        scroll.scrollTo(100);
      }
      scrollMore= () => {
        scroll.scrollMore(100);
      }
      handleSetActive= (to) => {
        console.log(to);
      }


    render() {
    return (
        <nav className="navContainer">
            <div className="logoContainer">
                <div className="logoIcon">
                    <i className="fab fa-superpowers"></i>
                </div>
                
                <div className="logoText">
                    <h2>Anthony <span>Jarod</span></h2>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
            <div className="mainNav">
                <div className="Navi">
                
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}><h4>Home</h4></Link>

                <Link
                    activeClass="active"
                    to="Portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}><h4>Portfolio</h4></Link>

                <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}><h4>Contact</h4></Link>
                </div>
                <div className="line1"></div>
                <div className="Icons">
                    <a href="https://github.com/divbySeptember"><i className="fab fa-github-square"></i></a>
                    <a href="https://twitter.com/Anthony_dev1"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.linkedin.com/in/anthonydev1/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    )
}
}





export default Nav