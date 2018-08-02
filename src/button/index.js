import React, {Component} from "react";
import style from "../../styles/modules/button/index.scss";
import classnames from "classnames";
import Loading, {LoadingBlinkDots} from "../loading";
import Container from "../container";

export default class Button extends Component {

  static defaultProps = {
    text: false,
    disabled: false,
    outlined: false,
    jumbo: false,
    xlg: false,
    lg: false,
    sm: false,
    xsm: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {onClick, text, disabled, outlined, loading, jumbo, xlg, lg, sm, xsm} = this.props;
    let classNames = classnames({
      [style["Button--text"]]: text,
      [style["Button--disabled"]]: disabled,
      [style["Button--outlined"]]: outlined,
      [style["Button--jumbo"]]: jumbo,
      [style["Button--xlg"]]: xlg,
      [style["Button--lg"]]: lg,
      [style["Button--sm"]]: sm,
      [style["Button--xsm"]]: xsm,

    });
    if (classNames) classNames = ` ${classNames}`;

    if (loading) {
      return (
        <button className={`${style.Button}${classNames}`} onClick={loading || disabled ? null : onClick}>
          <Container centerTextAlign>
            <Loading><LoadingBlinkDots small invert/></Loading>
          </Container>
        </button>
      )
    }
    return (
      <button className={`${style.Button}${classNames}`} onClick={loading || disabled ? null : onClick}>
        {loading ? "" : this.props.children}
      </button>
    )
  }
}

