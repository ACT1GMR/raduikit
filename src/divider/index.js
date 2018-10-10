// src/divider/index
import React, {Component} from "react";
import style from "../../styles/modules/divider/index.scss";
import classnames from "classnames";
import Container from "../container";

export default class Divider extends Component {

  static defaultProps = {
    thick: 1,
    unit: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {thick, unit, color} = this.props;
    let inlineStyle = {};
    inlineStyle.padding = `${thick || 1}${unit || "px"} 0`;
    let classNames = classnames({
      [style["Divider--colorAccent"]]: color === "accent",
      [style["Divider--colorPrimary"]]: color === "primary",
      [style["Divider--colorGray"]]: color === "gray",
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.Divider}${classNames}`} style={inlineStyle}>
        {this.props.children}
      </Container>
    );
  }
}