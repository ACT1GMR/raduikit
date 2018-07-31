import React, {Component} from "react";
import style from "../../styles/modules/button/index.scss";
import classnames from "classnames";

export default class Button extends Component {

  static defaultProps = {
    text: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {onClick, text} = this.props;
    let classNames = classnames({
      [style["Button--text"]]: text
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <button className={`${style.Button}${classNames}`} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}

