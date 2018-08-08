// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/list/ListItem.scss";
import {MdCheck} from "react-icons/lib/md";
import Container from "../container";

export default class ListItem extends Component {

  static defaultProps = {
    selection: false,
    multiple: false,
    invert: false,
    active: false,
    activeWithTick: false,
    onSelect: e => {},
    onDeSelect: e => {}
  };

  constructor(props) {
    super(props);
  }

  onClick() {
    const {multiple, active, onSelect, onDeselect} = this.props;
    if(multiple) {
      if(active) {
        return onDeselect();
      }
    }
    onSelect();
  }

  render() {
    const {selection, active, activeWithTick, invert} = this.props;
    let classNames = classnames({
      [style["ListItem--selection"]]: selection,
      [style["ListItem--active"]]: active,
      [style["ListItem--invert"]]: invert
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <li className={`${style.ListItem}${classNames}`} onClick={this.onClick.bind(this)}>
        {this.props.children}
        {activeWithTick &&
          <Container centerLeft>
            <MdCheck className={style.ListItem__Tick}/>
          </Container>
        }
      </li>
    );
  }
}
