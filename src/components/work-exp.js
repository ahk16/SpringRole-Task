import React from 'react';
import axios from 'axios'
import { Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { Media } from 'reactstrap';


export default class WorkExp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            info: [],
            works: []
        }
    }

    componentDidMount() {
        axios.get('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience').then( (response) => {
            //console.log(typeof response.data);
            this.setState({
                info: response.data,
                works: response.data.work_experiences        
              })
        }).catch( (err) => {
            console.log(err);
        })
    }
    
    render() {
        return(
            <div>
                <h3>Working Experience</h3>
                {this.state.works.map(value =>{
                    return(
                        <Card key={value.uuid}>
                        <Media>
                            <Media left href={value.company.url}> <br/>
                                {/* <Media object data-src={value.company.logo_url} alt="Generic placeholder image" /> */}
                                <img  hspace="20px" width="50px" height="50px" src={value.company.logo_url} alt=""/>
                            </Media>
                            <CardBody>
                            <Media body>
                                <Media heading>
                                  <CardTitle>{value.company.name}</CardTitle>
                                  <CardSubtitle><i>{value.designation}</i></CardSubtitle>
                                </Media>
                                    <CardText>{value.start_date}-{value.end_date},{value.duration}</CardText>
                                        {value.skills_data.map(skill => {
                                        if(skill.skill_name) {
                                            return(<CardText>Worked On <br/>
                                                {skill.skill_name}
                                            </CardText>)
                                        }
                                    })}
                            </Media>
                            </CardBody>

                        </Media>
                        <p style={{padding: "0px 20px 0px 20px"}}>{value.description}</p>
                        </Card>
                    )
                })}
                </div>         
  );
};    
}

