import React, {Component} from "react";
import NavItem from "./NavItem";
import NavbarToggler from "./NavbarToggler";
import style from "../../styles/modules/navigation/index.scss";
import {Nav} from 'reactstrap';

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    }
  }

  onToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav>{this.props.children}</Nav>
      </Collapse>

    );
  }
}

export {NavItem, NavbarToggler};