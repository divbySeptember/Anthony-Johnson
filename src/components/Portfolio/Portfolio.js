import React from 'react';
import Clarify from './Clarify'
import Wunderlist from './Wunderlist'
import Todo from './Todo'
import './Portfolio.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';






class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }





      render(){
          return (
              <div class="content">
                <header>
                  <h2>Portfolio</h2>
                </header>

               <div className="imgContainer">
                  <Clarify />
                  <Wunderlist />
                  <Todo /> 
               </div>
              </div>
			
          )
    
        }
}


export default Portfolio;