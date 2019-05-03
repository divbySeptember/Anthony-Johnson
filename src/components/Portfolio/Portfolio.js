import React from 'react';
import Image from 'react-bootstrap/Image'
import clarify from '../../img/clarify.png'






const Portfolio = () => {
          return (
              <div class="content">
                <header>
                  <h2>Portfolio</h2>
                  <a  className="lb1" href="https://codepen.io/AnthonySeptember/pen/ebMVMP?editors=1100" >Global Phones</a>
                  <a className="lb1" href="https://codepen.io/AnthonySeptember/pen/xMjRKK" >Sweet Eats</a>
                  <a className="lb1" href="https://github.com/divbySeptember/UI-III-Flexbox" >Great Idea</a>
                  

                  <p>Feel free to visit the links above to visit each projects repositories.</p>
                </header>

                <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={clarify} rounded />
                  </Col>
                  <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                  </Col>
                  <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                  </Col>
                </Row>
              </Container>;

              </div>
			
          )
    

}


export default Portfolio;