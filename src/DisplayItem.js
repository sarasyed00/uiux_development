import React, {Component} from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'

//component that lays out recipe items
export default class DisplayItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            //state to keep track of button pressed
            onOff: "Add to Menu"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    //method that is called when button is clicked
    handleClick = () => {

        if (this.state.onOff === "Add to Menu"){
            this.props.addTime(this.props.dispitem)
            this.setState({onOff: "Remove"})
        }
        else{
            this.props.removeTime(this.props.dispitem)
            this.setState({onOff: "Add to Menu"})

        }

    }

    render(){
        return (
            <div class = "flex-item">
                <div>
                    <h6> <b>
                    {this.props.dispitem.name} </b>
                    </h6>

                    <h6> <Icon name="circle" size="tiny" />
                    {this.props.dispitem.difficultlevel}
                    </h6>
                    <h6> <Icon name="circle" size="tiny" />
                    {this.props.dispitem.cooktime} minutes
                    </h6>
                    <h6> <Icon name="circle" size="tiny" />
                    {this.props.dispitem.type}
                    </h6>
                    <Button variant="outlined" color="default" style={{width: '130px', height:"50px"}}onClick={this.handleClick}> {this.state.onOff} {this.state.onOff==="Add to Menu" ? <Icon name='heart outline' size='large' /> : <Icon name='heart' size='large' />}</Button>

                </div>
                <div>
                    <img src={this.props.dispitem.image} width="100" height="100"/>
                </div>

            </div>


        )


    }

}
