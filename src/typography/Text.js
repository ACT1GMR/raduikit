// src/typography/Text
import React, {Component} from "react";
import style from "../../styles/modules/typography/Text.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class extends Component {

  static propTypes = {
    invert: PropTypes.bool,
    link: PropTypes.string,
    linkStyle: PropTypes.bool,
    inline: PropTypes.bool,
    italic: PropTypes.bool,
    bold: PropTypes.bool,
    wordWrap: PropTypes.oneOf(["breakWord", "breakSpaces"]),
    size: PropTypes.oneOf(["xs", "sm", "lg", "xlg"]),
    color: PropTypes.oneOf(["gray", "accent"]),
    dark: PropTypes.bool,
    light: PropTypes.bool,
    target: PropTypes.string
  };

  static defaultProps = {
    invert: false,
    inline: false,
    italic: false,
    bold: false,
    wordWrap: null,
    dark: false,
    light: false,
    link: null,
    linkStyle: false,
    color: null,
    size: null,
    target: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {invert, inline, italic, bold, wordWrap, size, children, link, linkStyle, target, color, dark, light} = this.props;
    let classNames = classnames({
      [style["Text--invert"]]: invert,
      [style["Text--inline"]]: inline,
      [style["Text--bold"]]: bold,
      [style["Text--italic"]]: italic,
      [style["Text--wordWrapBreakWord"]]: (wordWrap === "breakWord"),
      [style["Text--wordWrapBreakSpaces"]]: (wordWrap === "breakSpaces"),
      [style["Text--xs"]]: (size === "xs"),
      [style["Text--sm"]]: (size === "sm"),
      [style["Text--lg"]]: (size === "lg"),
      [style["Text--xlg"]]: (size === "xlg"),
    });
    if (classNames) classNames = ` ${classNames}`;

    let colorClassNames = "";
    if (color) {
      colorClassNames = `Text--color${capitalizeFirstLetter(color)}`;
      if (dark || light) {
        colorClassNames += light ? "Light" : "Dark";
      }
      colorClassNames = ` ${style[colorClassNames]}`;
    }
    classNames = `${style.Text}${classNames}${colorClassNames}`;
    if (link || linkStyle) {
      classNames = `${style["Text--link"]} ${classNames}`;
      if (link) {
        return <a href={link} className={classNames} target={target}>{children}</a>
      }
    }
    return <p className={classNames}>{children}</p>
  }
}