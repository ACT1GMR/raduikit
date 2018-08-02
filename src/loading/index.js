import LoadingSpinner from "./LoadingSpinner";
import LoadingBlinkDots from "./LoadingBlinkDots";
import React, {Component} from "react";
import style from "../../styles/modules/loading/index.scss";
import classnames from "classnames";

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
    classNames = `${style.Loading}${classNames}`;
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    );
  }
}

export {LoadingSpinner, LoadingBlinkDots};
