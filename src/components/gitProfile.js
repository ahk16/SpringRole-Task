import React from 'react';
import { Card,  CardBody, CardSubtitle } from 'reactstrap';
import {Container, Col, Row} from 'reactstrap';

function GitProfile (props) {
    return(
        <div>
            <h2>GitHub Profile </h2>
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="6"><img src={"/images/followers.png"} width={20} height={20} alt="" /> 50 <br />
                                    Followers</Col>
                            <Col xs="6"><img src={"/images/star.png"} width={20} height={20} alt="" /> 2 <br />
                                    Stars</Col>
                        </Row><br />
                        <Row>
                            <Col xs="6"><img src={"/images/repo.png"} width={20} height={20} alt="" /> 13 <br />
                            Repositories</Col>
                            <Col xs="6"><img src={"/images/contribution.png"} width={50} height={50} alt="" />429 <br />
                            Contributions<br/> (In last year)</Col>
                        </Row>
                    </Container>
                    <hr />
                </CardBody>
                <CardSubtitle><center><img src={"/images/coding.png"} width={50} height={50} alt="" />JavaScript,PHP,Python <br /></center>
                <p align="center">languages used</p></CardSubtitle>
            </Card>
    </div>
    
    )
}

export default GitProfile;