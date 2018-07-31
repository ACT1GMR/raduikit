import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalBody.scss";

export default class ModalBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.ModalBody}>
        {this.props.children}
      </div>
    );
  }
}
