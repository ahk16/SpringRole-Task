import React from 'react';
import axios from 'axios';
import { Card, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import {Media} from 'reactstrap';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default class Profile extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            profileInfo: [],
            skillsInfo: [],
            modal: false
        }
    }

    componentDidMount(){
        axios.get('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills').then(response => {
            console.log(response.data)
            this.setState({
                profileInfo: response.data,
                skillsInfo: response.data.skills
            })
        }).catch(err => {
            console.log(err)
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    
    render() {
        console.log(this.state.skillsInfo)
        return(
            <div>
                <Card>
                    <Media> <br />
                    <Media left href="#"> <br/>
                        <img src={this.state.profileInfo.avatar_url} alt="" width="200px" height="200px" />
                    </Media>

                    <CardBody>
                        <Media body>
                            <Media heading>
                            <Row>
                                <Col xs="9">
                                <CardTitle><b>{this.state.profileInfo.name}</b>
                                    <img src={"/images/verified.png"} width={"40px"} height={"40px"} alt="" />  
                                </CardTitle>
                                </Col>
                                <Col xs="3">
                                    <Button outline color="primary" onClick={this.toggle} >Message</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Signup to Endorse</ModalHeader>
                                    <ModalBody>
                                       <center><img src={this.state.profileInfo.avatar_url} style={{borderRadius:500, width:100}} /><br/> <br />
                                            <a href={"/vanity"}><Button color="primary">Signup</Button></a>
                                            <p style={{color:"grey"}}>Already a user? <a href={"/login"}>Login here</a></p>
                                       </center> 
                                    </ModalBody>
                                    <ModalFooter>
                                       <p style={{color:"grey"}}><img src={"/images/logo.png"} width="100" /> Create your verified professional profile in a matter of seconds.</p>
                                    </ModalFooter>
                                    
                                    </Modal>
                                </Col>    
                            </Row>
                            </Media>
                        </Media>
                        
                        <CardSubtitle>{this.state.profileInfo.current_job_designation} at {this.state.profileInfo.current_company}</CardSubtitle>
                        <p>{this.state.profileInfo.current_location}</p>
                        <Container>
                            <Row> 
                                {this.state.skillsInfo.map(skill => {
                                    return ( 
                                        <Col xs ="3">{`${skill.skill_name } `}</Col> 
                                    )
                                })}
        
                                <Col xs="2" style={{align:"right"}}><a><img src={"/images/blockchain.png"} alt= "" width={100} /></a></Col>
                            </Row><br /> <br/> <br />
                        </Container> <hr />
                        <a href="https://springrole.com/kartik"><Button color="link">{this.state.profileInfo.url}{' '}<img src={"/images/link.png"} width={"15px"} height={"15px"} alt="" /></Button></a>
                        
                        <Container/>
                    </CardBody>
                    </Media>
                </Card><br />

                <Row>
                    <Col>
                        <Card style={{height:100}}> <br />
                            <Row>
                                <Col xs ="2">
                                    <label style={{color:"grey", fontSize:10}}><i>BETA</i></label>
                                    <Button outline color="primary" style={{color:"primary", width:120}} onClick={this.toggle}>Endorse +</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Signup to Endorse</ModalHeader>
                                    <ModalBody>
                                       <center><img src={this.state.profileInfo.avatar_url} style={{borderRadius:500, width:100}} /><br/> <br />
                                            <a href={"/vanity"}><Button color="primary">Signup</Button></a>
                                            <p style={{color:"grey"}}>Already a user? <a href={"/login"}>Login here</a></p>
                                       </center> 
                                    </ModalBody>
                                    <ModalFooter>
                                       <p style={{color:"grey"}}><img src={"/images/logo.png"} width="100" /> Create your verified professional profile in a matter of seconds.</p>
                                    </ModalFooter>
                                </Modal>
                                </Col>

                                <Col xs="2">
                                    <a href="#"><Button color="primary">Verify Experience</Button></a>
                                </Col>

                                <Col xs="2">
                                    <a href="https://www.startupschool.org/"><img src={"/images/school.png"} alt="" width={150} /></a>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        )
    }
}