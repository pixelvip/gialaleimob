import * as React from 'react';
import './SideNavigation.css';
import * as FontAwesome from 'react-fontawesome';
import { Badge } from 'reactstrap';

export interface Props {
  
}

function SideNavigation({}: Props) {
    return (
        <div className="sideNavigationContent">
            <a href="#">
                <FontAwesome className="navIcon" name="home" size={"lg"} />
                Home
                <Badge className="navBadge" >New</Badge>
            </a>
            <a href="#">
                <FontAwesome className="navIcon" name="map" size={"lg"} />
                Map
            </a>
            <a href="#">
                <FontAwesome className="navIcon" name="edit" size={"lg"} />
                Contracts
            </a>
            <a href="#">
                <FontAwesome className="navIcon" name="users" size={"lg"} />
                Contacts
            </a>
        </div>
    );
}

export default SideNavigation;