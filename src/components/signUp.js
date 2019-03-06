import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card} from 'reactstrap';
import { Media } from 'reactstrap';
import {Row, Col} from 'reactstrap';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username: ''
        }
    }

    render() {
        return(
            <div>
            <div style={{margin:'100px'}}>
                <Card ><br/>
                <Row> 
                    <Col> <br /><br /><br /><br />
                        <h2 style={{padding: "15px", color:"blue"}}>Professional Profile Attested on Blockchain</h2>
                        <p align="auto" style={{padding: "15px", color:"grey"}}>Your Professional profile that is validated by your universities and workplace. Your skill proficiency is crowdscourced by your community</p>
                    </Col>

            
                <Col xs="6">
                <center>
                <h2>Reserve your SpringRole URL</h2>
                <p>Signup today and get 100 SPRING tokens</p><br/>
                </center>
                <Media>
                    <Media left href="#">
                        <img src={"/images/signup.png"} width={"100px"} alt=""/>
                    </Media>
                
                    <center>
                    <Media body> <br />
                        <Media heading>
                            Choose your URL with care
                        </Media>
                            It's your professional identity on blockchain.
                    </Media>
                    </center>
                </Media>
                                
                <Form>
                <FormGroup>
                    <center>
                    <Label  for="username" >www.springrole.com/</Label>
                    <Input style={{width: 300, padding: "10px", align:"center" }}  type="text" name="email" id="username" placeholder="Your Username" /> <br />
                    <Button color="primary">Reserve your URL </Button>
                    <h5 style={{color:"grey"}}>Already a user ? <a href="#">Login Here</a> </h5>
                    </center>
                </FormGroup>
            </Form>
                    
                </Col>
                </Row>
                </Card>
                </div>
                </div>


            
        )
    }
}