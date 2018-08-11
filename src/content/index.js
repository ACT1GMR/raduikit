// src/content/index
import React, {Component} from "react";
import style from "../../styles/modules/content/index.scss";
import classnames from "classnames";
import ContentFooter from "./ContentFooter";

export default class Content extends Component {

  static defaultProps = {
    borderRadius: 0,
    colorBackgroundDark: false,
    colorBackgroundLight: false,
    colorBackground: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {borderRadius, colorBackgroundLight, colorBackgroundDark, colorBackground} = this.props;
    let classNames = classnames({
      [style["Content--colorBackgroundLight"]]: colorBackgroundLight,
      [style["Content--colorBackgroundDark"]]: colorBackgroundDark,
      [style["Content--colorBackground"]]: colorBackground
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Content}${classNames}`} style={{borderRadius}}>
        {this.props.children}
      </div>
    );
  }
}

export {ContentFooter}
