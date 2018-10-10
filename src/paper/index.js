// src/content/index
import React, {PureComponent} from "react";
import style from "../../styles/modules/paper/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";

export default class Paper extends PureComponent {

  static propTypes = {
    borderRadius: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    colorBackgroundDark: PropTypes.bool,
    colorBackgroundLight: PropTypes.bool,
    colorBackground: PropTypes.bool,
    hasShadow: PropTypes.bool,
  };

  static defaultProps = {
    borderRadius: 0,
    hasShadow: false,
    colorBackgroundDark: false,
    colorBackgroundLight: false,
    colorBackground: false
  };

  constructor(props) {
    super(props);
  };

  render() {
    const {borderRadius, colorBackgroundLight, colorBackgroundDark, colorBackground, hasShadow} = this.props;
    let classNames = classnames({
      [style["Paper--colorBackgroundLight"]]: colorBackgroundLight,
      [style["Paper--colorBackgroundDark"]]: colorBackgroundDark,
      [style["Paper--colorBackground"]]: colorBackground,
      [style["paper--hasShadow"]]: hasShadow
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.Paper}${classNames}`} style={{borderRadius}}>
        {this.props.children}
      </Container>
    );
  }
}

export {default as PaperFooter} from "./PaperFooter";