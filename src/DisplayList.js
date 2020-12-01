import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import DisplayItem from './DisplayItem.js'


export default class DisplayList extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div class = "flex-container">


                {this.props.list.map(item => <DisplayItem dispitem= {item} addTime = {this.props.addTime} removeTime = {this.props.removeTime}/>)}


                </div>
            </div>
        )
    }

}


/*
{this.props.list.map(item =>
    <div>
    <h6>{item.name}, {item.difficultlevel}</h6>
    <img src={item.image} width="100" height="100"/>
    </div>

)}

*/
