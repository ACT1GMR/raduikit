import React, {Component} from "react";
import style from "../../styles/modules/content/index.scss";
import classnames from "classnames";
import ContentFooter from "./ContentFooter";

export default class Content extends Component {

  static defaultProps = {
    hasBackground: false,
    borderRadius: 0,
    colorBackgroundDark: false,
    colorBackground: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {borderRadius, hasBackground, colorBackgroundDark, colorBackground} = this.props;
    let classNames = classnames({
      [style["Content--hasBackground"]]: hasBackground,
      [style["Content--colorBackgroundDark"]]: colorBackgroundDark,
      [style["Content--colorBackground"]]: colorBackground
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Content}${classNames}`} style={{borderRadius: borderRadius}}>
        {this.props.children}
      </div>
    );
  }
}

export {ContentFooter}
