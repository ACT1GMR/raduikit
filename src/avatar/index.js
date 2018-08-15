// src/avatar/Avatar
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import style from "../../styles/modules/avatar/index.scss";
import classnames from "classnames";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class Avatar extends PureComponent {

  static propTypes = {
    left: PropTypes.bool
  };

  static defaultProps = {
    left: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {left, children} = this.props;
    let classNames = classnames({
      [style["Avatar--left"]]: left
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Avatar} ${classNames}`}>
        {children}
      </div>
    )
  }
}

export {default as AvatarImage} from "./AvatarImage";
export {default as AvatarName} from "./AvatarName";
export {default as AvatarText} from "./AvatarText";

