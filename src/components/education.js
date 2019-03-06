import React from 'react';
import axios from 'axios';
import { Media } from 'reactstrap';
import { Card, CardBody,CardTitle, } from 'reactstrap';


export default class Education extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            eduInfo: []
        }
    }

    componentDidMount() {
        axios.get('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education').then( response => {
            //console.log(response.data)
            this.setState({
                eduInfo: response.data.educationList
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
       // console.log(this.state.eduInfo)
        return(
            <div>
                <h3>Education</h3>
                {this.state.eduInfo.map(value => {
                   return (
                   <Card key={value.id}>
                       <Media >
                            <Media left top href="#"> <br/>
                                <img hspace="6px" width="50px" height="50px" src={'/images/uni-icon.png'} alt="" />
                            </Media>
                        <CardBody>
                        <Media body>
                            <p>{value.institution_name}</p>
                            <Media heading>
                            <CardTitle>{value.course}-{value.department}</CardTitle>
                            </Media>
                            <p><b>{value.score_metric.replace("Out of", `${value.score}/`)} </b></p>
                            <p>{value.location}</p>
                            <p>{value.start_date}-{value.end_date}</p>
                        </Media>
                        </CardBody>
                        </Media>
                   </Card>
                   )
                })}
            </div>
    );
};


}

            
    
