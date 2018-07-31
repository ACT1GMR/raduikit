import React, {Component} from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import style from "../../styles/modules/modal/index.scss";

export default class extends Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  handleClickOutside(event) {
    const {isOpen, onClose} = this.props;
    if (onClose) {
      if (isOpen) {
        onClose();
      }
    }
  }

  render() {
    const {isOpen} = this.props;
    return isOpen ?
      <div className={style.Modal} ref={this.container}>
        <div className={style.Modal__Overlay} onClick={this.handleClickOutside.bind(this)}/>
        <div className={style.Modal__Content}>
          {this.props.children}
        </div>
      </div>
      : ""
  }
}

export {ModalBody, ModalHeader, ModalFooter};