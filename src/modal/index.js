// src/modal/index
import React, {Component} from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import Container from "../container";
import style from "../../styles/modules/modal/index.scss";
import PropTypes from "prop-types";
import classnames from "classnames";


export default class extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    inContainer: PropTypes.bool,
    fullScreen: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false,
    inContainer: false,
    fullScreen: false
  };

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
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
    const {isOpen, inContainer, fullScreen} = this.props;
    const classNames = classnames({
      [style.Modal]: true,
      [style["Modal--inContainer"]]: inContainer,
      [style["Modal--fullScreen"]]: fullScreen
    });
    return isOpen ?
      <Container className={classNames} ref={this.container}>
        <Container className={style.Modal__Overlay} onClick={this.handleClickOutside}/>
        <Container className={style.Modal__Content}>
          {this.props.children}
        </Container>
      </Container>
      : ""
  }
}

export {ModalBody, ModalHeader, ModalFooter};