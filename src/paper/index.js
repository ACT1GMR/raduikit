// src/content/index
import React, {PureComponent} from "react";
import style from "../../styles/modules/paper/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class Paper extends PureComponent {

  static propTypes = {
    borderRadius: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    colorBackgroundDark: PropTypes.bool,
    colorBackgroundLight: PropTypes.bool,
    colorBackground: PropTypes.bool,
  };

  static defaultProps = {
    borderRadius: 0,
    colorBackgroundDark: false,
    colorBackgroundLight: false,
    colorBackground: false
  };

  constructor(props) {
    super(props);
  };

  render() {
    let {borderRadius, colorBackgroundLight, colorBackgroundDark, colorBackground} = this.props;
    let classNames = classnames({
      [style["Paper--colorBackgroundLight"]]: colorBackgroundLight,
      [style["Paper--colorBackgroundDark"]]: colorBackgroundDark,
      [style["Paper--colorBackground"]]: colorBackground
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Paper}${classNames}`} style={{borderRadius}}>
        {this.props.children}
      </div>
    );
  }
}

export {default as PaperFooter} from "./PaperFooter";