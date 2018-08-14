// src/typography/Text
import React, {Component} from "react";
import style from "../../styles/modules/typography/Text.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class extends Component {

  static propTypes = {
    invert: PropTypes.bool,
    link: PropTypes.bool,
    inline: PropTypes.bool,
    italic: PropTypes.bool,
    bold: PropTypes.bool,
    size: PropTypes.oneOf(["xs", "sm", "lg", "xlg"]),
  };

  static defaultProps = {
    invert: false,
    link: false,
    inline: false,
    italic: false,
    bold: false,
    size: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {invert, inline, italic, bold, size, children, link} = this.props;
    let classNames = classnames({
      [style["Text--invert"]]: invert,
      [style["Text--inline"]]: inline,
      [style["Text--bold"]]: bold,
      [style["Text--italic"]]: italic,
      [style["Text--xs"]]: (size === "xs"),
      [style["Text--sm"]]: (size === "sm"),
      [style["Text--lg"]]: (size === "lg"),
      [style["Text--xlg"]]: (size === "xlg"),
    });
    if (classNames) classNames = ` ${classNames}`;
    classNames = `${style.Text}${classNames}`;
    if (link) {
      classNames = `${style["Text--link"]} ${classNames}`;
      return <a href={link} className={classNames}>{children}</a>
    }
    return <p className={classNames}>{children}</p>
  }
}