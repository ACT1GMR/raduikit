// src/modal/ModalHeader
import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalHeader.scss";

export default class ModalHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.ModalHeader}>
        {this.props.children}
      </div>
    );
  }
}
