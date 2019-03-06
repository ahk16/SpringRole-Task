import React from 'react';
import {Card, Button} from 'reactstrap'
import {Row, Col} from 'reactstrap';

export default class Login extends React.Component{
    render() {
        return(
            <div style={{margin:100}}>
                <Card>
                    <Row>
                        <Col>
                            <br /> <br /> <br /> <br />
                            <center><h1 style={{color:"blue"}}>Welcome to SpringRole</h1>
                            <p style={{color:"grey"}}>Blockchain powered professional-profile verification and attestation protocol</p></center>
                        </Col>
                
                    <Col>
                        <br />
                       <center> <h3>Login with your account</h3>
                            <Button style={{width:300}} color="danger">Continue with Google</Button><br />
                            <Button style={{width:300}} color="warning">Continue with BlockStack</Button><br />
                            <Button style={{width:300}} color="success">Continue with BlockStack</Button><br/><br />
                    
                           <p style={{color:"grey"}}>Or login with <a href="#"><img src={"/images/civic.png"} alt="" width={40} /></a>{' '}<a href="#"><img src={"/images/telegram.png"} width={40} alt="" /></a>{' '}<a href="#"><img src={"/images/facebook.png"} alt="" width={40} /></a>
                            {' '}<a href="#"><img src={"/images/eth.png"} alt="" width={40} /></a></p>
                            <hr style={{backgroundColor:"grey", width:"300px", align:"center"}}/>
                            <p style={{color:"grey"}}>Don't have an account? <a href={"/vanity"}>Signup here</a></p></center>
                    </Col>
                    
                    </Row>
                </Card>
            </div>
        )
    }
    
}