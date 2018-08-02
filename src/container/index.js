import React, {Component} from "react";
import style from "../../styles/modules/container/index.scss"
import utilsStyle from "../../styles/utils/index.scss"
import classnames from "classnames";

export default class Container extends Component {

  static defaultProps = {
    maxWidth: false,
    inline: false,
    leftTextAlign: false,
    left: false,
    right: false,
    centerTextAlign: false,
    relative: false,
    absolute: false,
    centerLeft: false,
    centerRight: false,
    center: false,
    bottomRight: false,
    bottomLeft: false,
    bottomCenter: false,
    topRight: false,
    topLeft: false,
    topCenter: false,
    inSpace: false,
    className: null,
    id: null,
    onMouseOver: e => {
    },
    onMouseLeave: e => {
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {id, className, inline, leftTextAlign, centerTextAlign, maxWidth, minWidth, relative, absolute, centerLeft, centerRight, center, bottomRight, bottomLeft, bottomCenter, topRight, topLeft, topCenter, inSpace, left, right, onMouseOver, onMouseLeave} = this.props;
    let classNames = classnames({
      [style["Container--inline"]]: inline,
      [style["Container--relative"]]: relative,
      [style["Container--absolute"]]: absolute,
      [style["Container--centerLeft"]]: centerLeft,
      [style["Container--centerRight"]]: centerRight,
      [style["Container--center"]]: center,
      [style["Container--bottomRight"]]: bottomRight,
      [style["Container--bottomLeft"]]: bottomLeft,
      [style["Container--bottomCenter"]]: bottomCenter,
      [style["Container--topRight"]]: topRight,
      [style["Container--topLeft"]]: topLeft,
      [style["Container--topCenter"]]: topCenter,
      [style["Container--inSpace"]]: inSpace,
      [style["Container--left"]]: left,
      [style["Container--right"]]: right,
      [utilsStyle["u-leftTextAlign"]]: leftTextAlign,
      [utilsStyle["u-centerTextAlign"]]: centerTextAlign
    });
    if (classNames) classNames = ` ${classNames}`;
    const container = (
      <div className={`${style.Container}${classNames}`}
           id={id}
           style={{maxWidth: `${maxWidth ? maxWidth : "auto"}`, minWidth: `${minWidth ? minWidth : "auto"}`}}
           onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {this.props.children}
      </div>
    );
    if (className) {
      return (
        <div className={className}>
          {container}
        </div>
      );
    }
    return container;

  }
}

export {}
