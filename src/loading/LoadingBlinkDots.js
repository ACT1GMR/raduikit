// src/loading/LoadingBlinkDots
import React, {Component} from "react";
import style from "../../styles/modules/loading/LoadingBlinkDots.scss";
import classnames from "classnames";

export default class LoadingBlinkDots extends Component {

  static defaultProps = {
    invert: false,
    lg: false,
    xlg: false,
    sm: false,
    src: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {invert, lg, xlg, sm} = this.props;
    let classNames = classnames({
      [style["LoadingBlinkDots--invert"]]: invert,
      [style["LoadingBlinkDots--lg"]]: lg,
      [style["LoadingBlinkDots--xlg"]]: xlg,
      [style["LoadingBlinkDots--sm"]]: sm
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <p className={`${style.LoadingBlinkDots}${classNames}`}><span className={style.LoadingBlinkDots__Dot}/><span className={style.LoadingBlinkDots__Dot}/><span className={style.LoadingBlinkDots__Dot}/></p>
    );
  }
}