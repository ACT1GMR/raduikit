// src/loading/index
import React, {Component} from "react";
import style from "../../styles/modules/loading/index.scss";
import classnames from "classnames";
import Container from "../container";

export default class Loading extends Component {

  static defaultProps = {
    hasSpace: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {hasSpace} = this.props;
    let classNames = classnames({
      [style["Loading--hasSpace"]]: hasSpace
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.Loading}${classNames}`}>
        {this.props.children}
      </Container>
    )
  }
}

export {default as LoadingBlinkDots} from "./LoadingBlinkDots";
export {default as LoadingSpinner} from "./LoadingSpinner";
