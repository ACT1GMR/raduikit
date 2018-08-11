// src/typography/Text
import React, {Component} from "react";
import style from "../../styles/modules/typography/Text.scss";
import classnames from "classnames";

export default class extends Component {

  static defaultProps = {
    invert: false,
    link: false,
    inline: false,
    italic: false,
    bold: false,
    xs: false,
    sm: false,
    lg: false,
    xlg: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {invert, inline, italic, bold, xs, sm, lg, xlg, children, link} = this.props;
    let classNames = classnames({
      [style["Text--invert"]]: invert,
      [style["Text--inline"]]: inline,
      [style["Text--bold"]]: bold,
      [style["Text--italic"]]: italic,
      [style["Text--xs"]]: xs,
      [style["Text--sm"]]: sm,
      [style["Text--lg"]]: lg,
      [style["Text--xlg"]]: xlg,
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