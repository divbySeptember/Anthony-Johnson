import React from 'react';
import clarify from '../../img/clarify.png'
import './Portfolio.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';







class Clarify extends React.Component {
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
            return(
                <div className='container'>
                     <div className="img1">
                    <img src={clarify} onClick={this.toggle} rounded="true" />
                  </div>
                    <Modal className="i1" isOpen={this.state.modal} toogle={this.toggle} >
                      <ModalHeader toggle={this.toggle}>clarify Spotify API</ModalHeader>
                      <ModalBody>
                      <p className='bp1'> Clarify is a app using React, Redux & a Spotify API.</p>
                        <a className='ui1'  href='https://clarifymusic.netlify.com/'><i  class="fas fa-globe"></i></a>
                        <a className='ui1'  href='https://github.com/bw-spotify/user-interface'><i  class="fab fa-github-square"></i></a>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>X</Button>
                      </ModalFooter>
                    </Modal>
                </div>
            )
        }
    }
    export default Clarify;

