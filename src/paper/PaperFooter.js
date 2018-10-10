// src/content/ContentFooter
import React, { PureComponent } from "react";
import style from "../../styles/modules/paper/PaperFooter.scss";
import Container from "../container";

export default class PaperFooter extends PureComponent {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Container className={style.PaperFooter}>
        {this.props.children}
      </Container>
    );
  };
};