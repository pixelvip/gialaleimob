import * as React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';
import logo from './logo.png';
import * as FontAwesome from 'react-fontawesome';

export interface Props {
    navbarVisible: boolean,
    toggleNavbarHandler(): void
}

interface State {
    notificationAmout: number
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { notificationAmout: 0 };
  }

  render() {
    return (
      <div className="headerContent">
        <div className="headerLeft">
            <img src={logo} alt="logo"></img>
            <div className="toggleIcon" onClick={this.props.toggleNavbarHandler}>
                {this.props.navbarVisible ? 
                    <FontAwesome name="angle-left" size={"2x"} />
                : 
                    <FontAwesome name="angle-right" size={"2x"} />}
                
            </div>
        </div>

        <div className="headerMiddle">
            <Nav>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Settings</NavLink>
                </NavItem>
            </Nav>
        </div>
      </div>
    );
  }
}

export default Header;