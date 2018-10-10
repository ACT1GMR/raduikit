// src/modal/ModalBody
import React, {Component} from "react";
import style from "../../styles/modules/modal/ModalBody.scss";
import Container from "../container";

export default class ModalBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className={style.ModalBody}>
        {this.props.children}
      </Container>
    );
  }
}
