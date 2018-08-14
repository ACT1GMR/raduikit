// src/avatar/AvatarName
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarName.scss";

export default class AvatarName extends PureComponent {

  static propTypes = {
    invert: PropTypes.bool,
    bottom: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg", "xlg"]),
  };

  static defaultProps = {
    invert: false,
    bottom: false,
    size: null
  };

  constructor(props) {
    super(props);
  };

  render() {
    let { size, invert, bottom, children } = this.props;
    let classNames = classnames({
      [style["AvatarName--invert"]]: invert,
      [style["AvatarName--bottom"]]: bottom,
      [style["AvatarName--sm"]]:  (size === "sm"),
      [style["AvatarName--lg"]]:  (size === "lg"),
      [style["AvatarName--xlg"]]: (size === "xlg"),
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <p className={`${style.AvatarName} ${classNames}`}>{children}</p>
    );
  }
}