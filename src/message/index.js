import React, {Component} from "react";
import style from "../../styles/modules/message/index.scss";
import classnames from "classnames";

export default class Message extends Component {

  static defaultProps = {
    small: false,
    large: false,
    xLarge: false,
    invert: false,
    src: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {small, large, xLarge, invert, warn, success, error} = this.props;
    let classNames = classnames({
      [style["Message--sm"]]: small,
      [style["Message--lg"]]: large,
      [style["Message--xlg"]]: xLarge,
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

export {}
