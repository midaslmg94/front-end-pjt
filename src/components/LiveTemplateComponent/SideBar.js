import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SideBar extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem active href="#">인기영상</ListGroupItem>
                    <ListGroupItem href="#">추천영상</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default SideBar;