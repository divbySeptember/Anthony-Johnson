import React from 'react'
import './HeaderText.scss'



let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

const HeaderText = () => {
    return (
        <div className="heroText" >
            <h1><span
       class="txt-rotate sog_header-dynamic-text"
       data-period="2000"
       data-rotate='[ "Full Stack Developer", "UX/UI Designer", "Forever Learning" ]'/></h1>
            <p>Based out of Tallahassee, FL. Specializing in Less/Scss/Sass, JavaScript, Es6, Reactjs, Nodejs, and more. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me Below.</p>
            <div className="btnLive">
                <button className="btn1">Need a Wbsite { <i className="iconz" class="fas fa-arrow-circle-right"></i>} </button>
                <button className="btn2">View my Resume {<i className="iconz" class="fas fa-arrow-circle-right"></i>} </button>
            </div>
        </div>
        
    )
}





export default HeaderText