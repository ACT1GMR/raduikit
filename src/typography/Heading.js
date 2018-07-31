import React, {Component} from "react";
import style from "../../styles/modules/typography/Heading.scss";
import classnames from "classnames";

export default class extends Component {

  static defaultProps = {
    invert: false,
    className: null,
    onClose: e => {},
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {h2, h3, h4, h5, children, invert} = this.props;
    let classNames = classnames({[style["Heading--Invert"]]: invert});
    if (classNames) classNames = ` ${classNames}`;
    classNames =`${style.Heading}${classNames}`;
    if (h2) {
      return <h2 className={classNames}>{children}</h2>
    }
    if (h3) {
      return <h3 className={classNames}>{children}</h3>
    }
    if (h4) {
      return <h4 className={classNames}>{children}</h4>
    }
    if (h5) {
      return <h5 className={classNames}>{children}</h5>
    }
    return <h1 className={classNames}>{children}</h1>
  }
}