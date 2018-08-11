// src/avatar/AvatarName
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarName.scss";

export default class AvatarName extends Component {

  static defaultProps = {
    invert: false,
    bottom: false,
    sm: false,
    lg: false,
    xlg: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {invert, bottom, sm, lg, xlg} = this.props;
    let classNames = classnames({
      [style["AvatarName--invert"]]: invert,
      [style["AvatarName--bottom"]]: bottom,
      [style["AvatarName--sm"]]: sm,
      [style["AvatarName--lg"]]: lg,
      [style["AvatarName--lg"]]: xlg
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <p className={`${style.AvatarName}${classNames}`}>{this.props.children}</p>
    );
  }
}