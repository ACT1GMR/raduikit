// src/list/ListItem
import React, {Component} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/list/ListItem.scss";
import {MdCheck} from "react-icons/lib/md";
import Container from "../container";

class ListItem extends Component {

  static propTypes = {
    selection: PropTypes.bool,
    multiple: PropTypes.bool,
    invert: PropTypes.bool,
    active: PropTypes.bool,
    activeWithTick: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeSelect: PropTypes.func,
  };

  static defaultProps = {
    selection: false,
    multiple: false,
    invert: false,
    active: false,
    activeWithTick: false,
    onSelect: e => {
    },
    onDeSelect: e => {
    },
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {multiple, active, onSelect, onDeselect} = this.props;
    if (onDeselect) {
      if (multiple) {
        if (active) {
          return onDeselect();
        }
      }
    }
    if (onSelect) {
      onSelect();
    }
  }

  render() {
    const {selection, active, activeWithTick, invert, value, children} = this.props;
    let classNames = classnames({
      [style["ListItem--selection"]]: selection,
      [style["ListItem--active"]]: active,
      [style["ListItem--invert"]]: invert,
    });
    return (
      <li className={`${style.ListItem} ${classNames && classNames}`} onClick={this.onClick}>
        {children}
        {activeWithTick && active ?
          <Container centerLeft>
            <MdCheck className={style.ListItem__Tick} size={28}/>
          </Container> : ""
        }
      </li>
    );
  }
}

export default ListItem;