// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/navigation/NavbarToggler.scss";
import {NavbarToggler} from 'reactstrap';

export default class NavigationItem extends Component {

  static defaultProps = {
    selection: false,
    active: false,
    onClick: null,
    toggleClick: e=>{}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {toggleClick} = this.props;
    return (
      <NavbarToggler onClick={toggleClick}/>
    )
  }
}
