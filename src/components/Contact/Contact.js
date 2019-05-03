import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Contact.scss'

class Contact extends React.Component{
    render(){
        return(
            <div className="Form-Section">
            <h1>Send Me A Message</h1>
            <form name="Contact" netlify>
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
            </form>
            
            
            </div>
        )
    }
}


export default Contact