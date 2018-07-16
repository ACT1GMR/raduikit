// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/navigation/NavItem.scss";
import {NavItem} from 'reactstrap';

export default class NavigationItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return (
      <NavItem>
        {children}
      </NavItem>
    )
  }
}
