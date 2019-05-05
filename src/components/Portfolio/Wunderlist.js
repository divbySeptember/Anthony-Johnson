import React from 'react';
import wunderlist from '../../img/wunderlist.png'
import './Portfolio.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';







class Wunderlist extends React.Component {
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
                    <img src={wunderlist} onClick={this.toggle}  rounded='true' />
                  </div>
                    <Modal isOpen={this.state.modal} toogle={this.toggle}  className="i1">
                      <ModalHeader toggle={this.toggle}>Wunderlist A Consumber ToDo App</ModalHeader>
                      <ModalBody>
                        <p className='bp1'> Wunderlist is a Consumer base Todo app.</p>
                        <a className='ui1'  href='https://wunderlist24.netlify.com/'><i  class="fas fa-globe"></i></a>
                        <a className='ui1'  href='https://github.com/bw-wunderlist/bw-wunderlist-FE'><i  class="fab fa-github-square"></i></a>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>X</Button>
                      </ModalFooter>
                    </Modal>
                </div>
            )
        }
    }
    export default Wunderlist;
