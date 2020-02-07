// src/menu/contextmenu
import React, {Component} from "react";
import {ContextMenuTrigger} from "react-contextmenu";

export default class ContextTrigger extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {children, contextTriggerRef, ...other} = this.props;
    return <ContextMenuTrigger ref={contextTriggerRef} {...other}>{children}</ContextMenuTrigger>;
  }
}