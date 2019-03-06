import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Profile from './Intro';
import WorkExp from './work-exp';
import Skills from './skills';
import Education from './education';
import GitProfile from './gitProfile';
import SignUp from './signUp';


function MainComponent () {
  
    return(
        <div>
          <Container>
            <Row>
              <Col><Profile /></Col>
            </Row><br />
            <Row>
              <Col xs="8"><WorkExp /></Col>
                <Col xs="4"><Skills /></Col>
        </Row> <br />
        <Row>
          <Col xs="6"><Education /></Col>
          <Col xs="6" sm="4"><GitProfile /></Col>
        </Row>
      </Container>
    );
        </div>
    )
}

export default MainComponent