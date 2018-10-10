// src/list/index
import React, {Component} from "react";
import style from "../../styles/modules/image/index.scss";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class Image extends Component {

  static propTypes = {
    circular: PropTypes.bool,
    alt: PropTypes.string,
  };

  static defaultProps = {
    circular: false,
    alt: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {circular, alt, className, ...other} = this.props;
    let classNames = classnames({
      [style.Image]: true,
      [style["Image--circular"]]: circular
    });
    classNames = `${classNames} `;
    return (
      <img className={`${classNames}${className || ""}`} alt={alt} {...other}>
        {this.props.children}
      </img>
    );
  }
}