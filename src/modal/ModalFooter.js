// src/modal/ModalFooter
import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalFooter.scss";

export default class ModalFooter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.ModalFooter}>
        {this.props.children}
      </div>
    );
  }
}
