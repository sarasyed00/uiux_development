import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css';

export default class NavBar extends Component {

    constructor(props){
        super(props);
    }

    render (){
        return (
            <div>
                <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="Nav" horizontal="end">
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Any" onSelect={this.props.onSelectFilterLevel}>Any</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Easy" onSelect={this.props.onSelectFilterLevel}>Easy</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Medium" onSelect={this.props.onSelectFilterLevel}>Medium</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Hard" onSelect={this.props.onSelectFilterLevel}>Hard</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                </div>

                <div id="type">
                <Navbar bg="dark" variant="dark">
                    <Nav className="Nav2">
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Any" onSelect={this.props.onSelectFilterType}>Any</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Breakfast" onSelect={this.props.onSelectFilterType}>Breakfast</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Dessert" onSelect={this.props.onSelectFilterType}>Dessert</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link style={{'font-size':'1.5em'}} eventKey="Dinner" onSelect={this.props.onSelectFilterType}>Dinner</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                </div>
                <div id="sorting">
                <Navbar >
                    <Nav className="sortByTime">
                        <NavDropdown title="Sort By Time:" style={{'font-size':'1.5em', 'color':'#7E65E2'}}>
                            <NavDropdown.Item> <Nav.Link eventKey="None" onSelect={this.props.onSelectSort}>None </Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item> <Nav.Link eventKey="Asc" onSelect={this.props.onSelectSort}>Low to High </Nav.Link></NavDropdown.Item>
                            <NavDropdown.Item> <Nav.Link eventKey="Dsc" onSelect={this.props.onSelectSort}>High to Low </Nav.Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                </div>
            </div>
        );
    }
}
