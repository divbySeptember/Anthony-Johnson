import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Contact.scss'

class Contact extends React.Component{
    render(){
        return(
            <div className="Form-Section">
            <h1>Send Me A Message</h1>
            <Form data-netlify="true">
                <FormGroup>
                <Input 
                className="Email-Input"
                type="text"
                name="Email"
                placeholder="Email"
                />
                </FormGroup>
                <FormGroup>
                <Input 
                className="Msg-Input"
                type="textarea"
                name="Message"
                placeholder="Message"
                />
                </FormGroup>


                <Button 
                className="btn-input"
                type="submit" 
                > Submit
                </Button>
            </Form>
            
            
            </div>
        )
    }
}


export default Contact