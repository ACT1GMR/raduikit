import React, {Component} from "react";

import AvatarImage from "./AvatarImage";
import AvatarName from "./AvatarName";
import AvatarText from "./AvatarText";
import style from "../../styles/modules/avatar/index.scss";
import classnames from "classnames";

export default class Avatar extends Component {

  static defaultProps = {
    left: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {left} = this.props;
    let classNames = classnames({[style["Avatar--left"]]: left});
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Avatar}${classNames}`}>
        {this.props.children}
      </div>
    );
  }
}

export {AvatarText, AvatarName, AvatarImage}
