(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/aj.048f5ec6.jpg"},,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/clarify.d17c8594.png"},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(16),i=a.n(s),r=(a(15),a(24),a(7)),c=a(8),o=a(11),m=a(9),u=a(12),h=(a(25),function(){return l.a.createElement("nav",{className:"navContainer"},l.a.createElement("div",{className:"logoContainer"},l.a.createElement("div",{className:"logoIcon"},l.a.createElement("i",{class:"fab fa-superpowers"})),l.a.createElement("div",{className:"logoText"},l.a.createElement("h2",null,"Anthony ",l.a.createElement("span",null,"Jarod")),l.a.createElement("h3",null,"Full Stack Developer"))),l.a.createElement("div",{className:"mainNav"},l.a.createElement("div",{className:"Navi"},l.a.createElement("a",{href:"#"},"Home"),l.a.createElement("a",{href:"#"},"Portfolio"),l.a.createElement("a",{href:"#"},"Contact")),l.a.createElement("div",{className:"line1"}),l.a.createElement("div",{className:"Icons"},l.a.createElement("i",{class:"fab fa-github-square"}),l.a.createElement("i",{class:"fab fa-twitter-square"}),l.a.createElement("i",{class:"fab fa-linkedin"}))))}),d=(a(26),function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1});d.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),t=0;t<e.length;t++){var a=e[t].getAttribute("data-rotate"),n=e[t].getAttribute("data-period");a&&new d(e[t],JSON.parse(a),n)}};var p=function(){return l.a.createElement("div",{className:"heroText"},l.a.createElement("h1",null,l.a.createElement("span",{class:"txt-rotate sog_header-dynamic-text","data-period":"2000","data-rotate":'[ "Full Stack Developer", "UX/UI Designer", "Forever Learning" ]'})),l.a.createElement("p",null,"Based out of Tallahassee, FL. Specializing in Less/Scss/Sass, JavaScript, Es6, Reactjs, Nodejs, and more. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me Below."),l.a.createElement("div",{className:"btnLive"},l.a.createElement("button",{className:"btn1"},"Need a Wbsite ",l.a.createElement("i",{className:"iconz",class:"fas fa-arrow-circle-right"})," "),l.a.createElement("button",{className:"btn2"},"View my Resume ",l.a.createElement("i",{className:"iconz",class:"fas fa-arrow-circle-right"})," ")))},E=(a(27),a(17)),f=a.n(E),b=function(){return l.a.createElement("div",{className:"mainAbout"},l.a.createElement("div",{className:"aboutText"},l.a.createElement("h2",null,"About ",l.a.createElement("span",null," Anthony J. Johnson ")),l.a.createElement("p",null,"Anthony J. Johnson, from Miami, FL. I am humble and always learning but yet I am very confident in what I do, I belive in hard work & Fun, I know it's a little contradicting, but I also believe you have to love what you do and if that statement is true then its always fun to work hard."),l.a.createElement("p",null,"The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable. Using the latest in HTML, Css, Javascript, Node.js, Less, and more")),l.a.createElement("div",{className:"aboutImg"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{className:"img-aj",src:f.a,alt:"Anthony Jarod Johnson"}))))},g=(a(28),a(29),function(){return l.a.createElement("div",{class:"content"},l.a.createElement("header",null,l.a.createElement("h2",null,"Portfolio"),l.a.createElement("a",{className:"lb1",href:"https://codepen.io/AnthonySeptember/pen/ebMVMP?editors=1100"},"Global Phones"),l.a.createElement("a",{className:"lb1",href:"https://codepen.io/AnthonySeptember/pen/xMjRKK"},"Sweet Eats"),l.a.createElement("a",{className:"lb1",href:"https://github.com/divbySeptember/UI-III-Flexbox"},"Great Idea"),l.a.createElement("p",null,"Feel free to visit the links above to visit each projects repositories.")))}),v=(a(30),function(){return l.a.createElement("div",{className:"Main-Footer"},l.a.createElement("h1",null,"Footer"))}),N=a(37),y=a(38),w=a(39),x=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Form-Section"},l.a.createElement("h1",null,"Send Me A Message"),l.a.createElement("form",{name:"Contact",netlify:!0},l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"Email-Input",type:"text",name:"Email",placeholder:"Email"})),l.a.createElement(N.a,null,l.a.createElement(y.a,{className:"Msg-Input",type:"textarea",name:"Message",placeholder:"Message"})),l.a.createElement(w.a,{className:"btn-input",type:"submit"}," Submit")))}}]),t}(l.a.Component)),I=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header",style:{zIndex:-1}},l.a.createElement(h,null),l.a.createElement(p,{style:{zIndex:1}})),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(x,null),l.a.createElement(v,null))}}]),t}(n.Component);i.a.render(l.a.createElement(I,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7ec07213.chunk.js.map