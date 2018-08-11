// src/avatar/AvatarImage
import React, {Component} from "react";
import style from "../../styles/modules/avatar/AvatarImage.scss";
import classnames from "classnames";

export default class AvatarImage extends Component {

  static defaultProps = {
    sm: false,
    lg: false,
    xlg: false,
    src: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {src, sm, lg, xlg} = this.props;
    let classNames = classnames({
      [style["AvatarImage--sm"]]: sm,
      [style["AvatarImage--lg"]]: lg,
      [style["AvatarImage--xlg"]]: xlg
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.AvatarImage}${classNames}`}>
        <img src={src} className={style.AvatarImage__Image}/>
      </div>
    );
  }
}