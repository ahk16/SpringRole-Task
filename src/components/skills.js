import React from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Media} from 'reactstrap';
import Rating from 'react-rating';

export default class Skills extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            skills: [],
            modal: false
        }
    }

    componentDidMount() {
        axios.get('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills').then(response => {
            console.log(response.data);
            this.setState({
                skills: response.data.skills
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
        return(
            <div>
                <h3>Skills</h3>
                    {this.state.skills.map(skill => {
                        return(
                            <div key={skill.id}>
                                <ListGroup>
                                   <ListGroupItem disabled tag="a" href="#"><center>{skill.skill_name}</center><br/>
                                   <p align="center"> <Rating intialRating={2} /></p>
                                   </ListGroupItem>
                                    <ListGroupItem color="warning" onClick={this.toggle}>Endorsed by {skill.endorsed_by.users.map(user => {
                                return `${user.name.full}, ` 
                            })}and {skill.endorsed_by.total_count - 1} others</ListGroupItem>
                                </ListGroup>
                            
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    {this.state.skills.map(skill => {
                                        return (
                                            <div>
                                                <ModalHeader toggle={this.toggle}>{skill.skill_name}</ModalHeader>
                                                <ModalBody>
                                                    <ListGroup>
                                                        {skill.endorsed_by.users.map(user => {
                                                           return (
                                                               <Media> <br/>
                                                                <img src={user.avatar_url} width={50} alt=""/>
                                                               <ListGroupItem tag="a" href={user.url}>{user.name.full}</ListGroupItem>
                                                               </Media>
                                                           
                                                           )
                                                        })}
                                                        
                                                    </ListGroup>
                                                </ModalBody>

                                            </div>
                                        
                                            
                                            )
                                    })}
                                        
                                    
                                    
                                    </Modal>
                        
                                
                            
                            
                            </div>
                        )
                    })}
            </div>
            
        )
    }
}


