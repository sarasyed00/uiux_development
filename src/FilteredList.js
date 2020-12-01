import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DisplayList from './DisplayList.js'
import NavBar from './NavBar.js'
import DisplayMenu from './DisplayMenu.js'
import './App.css';
import './index.css';

export default class FilteredList extends Component {

    constructor(props){
        super(props);
        this.productList= this.props.list
        this.state = {
            difficultlevel: "Any",
            type: "Any",
            sort: "None",
            totaltime: 0,
            menuitems: [],
        };
    }


    onSelectFilterLevel = event => {
        this.setState({
            difficultlevel: event
        })
    };

    onSelectFilterType = event => {
        this.setState({
            type: event
        })
    };

    onSelectSort = event => {
        this.setState({
            sort: event
        })
    }

    matchesFilterLevel = item => {
	{/* all items should be shown when no filter is selected*/}
    	if(this.state.difficultlevel === 'Any') {
    		return true
    	} else if (this.state.difficultlevel === item.difficultlevel) {
    		return true
    	} else {
    		return false
    	}
    };

    matchesFilterType = item => {
	{/* all items should be shown when no filter is selected*/}
    	if(this.state.type === 'Any') {
    		return true
    	} else if (this.state.type === item.type) {
    		return true
    	} else {
    		return false
    	}
    };

    checkBoth = item => {
        if(this.matchesFilterType(item) === true){
            if(this.matchesFilterLevel(item) ===true){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }

    sortAll = list => {
        if (this.state.sort === 'None'){
            return this.props.list.filter(this.checkBoth)
        }
        if (this.state.sort === "Asc"){
            return this.props.list.filter(this.checkBoth).sort((a, b) => a.cooktime - b.cooktime)
        }
        if (this.state.sort === "Dsc"){
            return this.props.list.filter(this.checkBoth).sort((a,b) => b.cooktime - a.cooktime)
        }

    }

    addTime = item => {
        this.setState({totaltime: this.state.totaltime +item.cooktime})
        const newitems = [...this.state.menuitems, item.name];
        this.setState({menuitems: newitems });
    }

    removeTime = item => {
        this.setState({totaltime: this.state.totaltime - item.cooktime})
        const newitems = this.state.menuitems.filter(x => x != item.name);
        this.setState({menuitems: newitems});
    }



    render() {
        return (
            <div>
                <NavBar onSelectSort = {this.onSelectSort} onSelectFilterLevel= {this.onSelectFilterLevel} onSelectFilterType={this.onSelectFilterType}/>
                <div class = "flex-recipes-menu">
                    <div id="recipes">
                        <h1><b>My Recipes </b></h1>
                        <DisplayList list = {this.sortAll(this.props.list)} addTime = {this.addTime} removeTime = {this.removeTime}/>
                    </div>

                    <div id="menu" class="menu">

                        <h1><b>My Menu </b></h1>
                        <div class="flex-item">
                            <div class = "flex-menu-list">
                                <div>
                                    <p> <b>Total cook time: </b> {this.state.totaltime} minutes
                                    <br /> <b>Menu Items:</b></p>
                                </div>
                                <div>
                                    <DisplayMenu list={this.state.menuitems} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

//will have 2 functions:
// 1. onSelectFilterLevel (will select only recipes of certain difficulty level)
// 2. matchesFilterLevel (creating a filtering condition)
//<DisplayList list={this.props.list.filter(this.checkBoth)}/>
