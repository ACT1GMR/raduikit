// src/menu/contextmenu
import React, {Component} from "react";
import {ContextMenu, hideMenu} from "react-contextmenu";
import style from "../../styles/modules/menu/Context.scss";

export default class Context extends Component {

  constructor(props) {
    super(props);
  }

  hideMenu(e){
    hideMenu(e);
  }

  render() {
    const {contextRef, children, ...other} = this.props;
    return <ContextMenu className={style.Context} ref={contextRef} {...other}>{children}</ContextMenu>;
  }
}
export {default as ContextItem} from "./ContextItem";
export {default as ContextTrigger} from "./ContextTrigger";