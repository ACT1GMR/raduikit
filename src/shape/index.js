// src/shape/index
import React, {Component} from "react";
import style from "../../styles/modules/shape/index.scss";
import classnames from "classnames";
import ShapeCircle from "./ShapeCircle";

export default class Shape extends Component {

  static defaultProps = {
    sm: false,
    lg: false,
    xlg: false,
    colorTextAccent: false,
    colorTextPrimary: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {sm, lg, xlg, colorTextAccent, colorTextPrimary} = this.props;
    let classNames = classnames({
      [style["Shape--sm"]]: sm,
      [style["Shape--lg"]]: lg,
      [style["Shape--xlg"]]: xlg,
      [style["Shape--colorTextAccent"]]: colorTextAccent,
      [style["Shape--colorTextPrimary"]]: colorTextPrimary
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Shape}${classNames}`}>
        {this.props.children}
      </div>
    );
  }
}

export {ShapeCircle}
