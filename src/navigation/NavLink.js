// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import {Link} from 'react-router-dom';
import style from "../../styles/modules/navigation/NavLink.scss";
import {NavLink} from 'reactstrap';

export default class NavigationItem extends Component {

  static defaultProps = {
    href: false,
    to: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {href, to} = this.props;
    let navConfig = {};
    if (href) {
      navConfig.href = href;
    } else {
      navConfig.to = to
    }
    return (
      <NavLink tag={Link} {...navConfig}/>
    )
  }
}
