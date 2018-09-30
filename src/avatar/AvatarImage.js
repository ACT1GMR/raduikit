// src/avatar/AvatarImage
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "../../styles/modules/avatar/AvatarImage.scss";

export default class AvatarImage extends PureComponent {

  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'lg', 'xlg']),
    customSize: PropTypes.string
  };

  static defaultProps = {
    src: undefined,
    size: null,
    customSize: null
  };

  constructor(props) {
    super(props);
  };

  render() {
    let {src, size, customSize} = this.props;
    let classNames = classnames({
      [style["AvatarImage--sm"]]: (size === "sm"),
      [style["AvatarImage--lg"]]: (size === "lg"),
      [style["AvatarImage--xlg"]]: (size === "xlg"),
    });
    if (classNames) classNames = ` ${classNames}`;
    let inlineStyle = {};
    if (customSize) {
      inlineStyle = {...inlineStyle, ...{width: customSize, height: customSize}};
    }
    return (
      <div className={`${style.AvatarImage} ${classNames}`} style={inlineStyle}>
        <div style={{backgroundImage: `url('${src}')`}} className={style.AvatarImage__Image}/>
      </div>
    );
  }
}
