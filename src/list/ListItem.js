// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/list/ListItem.scss";

export default class ListItem extends Component {

  static defaultProps = {
    selection: false,
    invert: false,
    active: false,
    onSelect: e=>{}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {selection, active, invert} = this.props;
    let classNames = classnames({[style["ListItem--Selection"]]: selection, [style["ListItem--Active"]]: active, [style["ListItem--Invert"]]: invert});
    if (classNames) classNames = ` ${classNames}`;
    return (
      <li className={`${style.ListItem}${classNames}`} onClick={this.props.onSelect}>
        {this.props.children}
      </li>
    );
  }
}
