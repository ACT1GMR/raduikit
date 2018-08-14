// src/shape/index
import React, {Component} from "react";
import style from "../../styles/modules/shape/index.scss";
import classnames from "classnames";

export default class Shape extends Component {

  static defaultProps = {
    sm: false,
    lg: false,
    xlg: false,
    colorAccent: false,
    colorPrimary: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {sm, lg, xlg, colorAccent, colorPrimary} = this.props;
    let classNames = classnames({
      [style["Shape--sm"]]: sm,
      [style["Shape--lg"]]: lg,
      [style["Shape--xlg"]]: xlg,
      [style["Shape--colorAccent"]]: colorAccent,
      [style["Shape--colorPrimary"]]: colorPrimary
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Shape}${classNames}`}>
        {this.props.children}
      </div>
    );
  }
}

export {default as ShapeCircle} from "./ShapeCircle";