import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'


export default class DisplayMenu extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            this.props.list.map(item => <li> {item} </li>)
        )
    }

}
