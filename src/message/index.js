// src/message/index
import React, {Component} from "react";
import style from "../../styles/modules/message/index.scss";
import classnames from "classnames";

export default class Message extends Component {

  static defaultProps = {
    sm: false,
    lg: false,
    xlg: false,
    invert: false,
    src: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {sm, lg, xlg, invert, warn, success, error} = this.props;
    let classNames = classnames({
      [style["Message--sm"]]: sm,
      [style["Message--lg"]]: lg,
      [style["Message--xlg"]]: xlg,
      [style["Message--invert"]]: invert,
      [style["Message--warn"]]: warn,
      [style["Message--success"]]: success,
      [style["Message--error"]]: error
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Message}${classNames}`}>
        {this.props.children}
      </div>
    );
  }
}