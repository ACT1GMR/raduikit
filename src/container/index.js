import React, {Component} from "react";
import style from "../../styles/modules/container/index.scss"
import classnames from "classnames";

export default class Container extends Component {

  static defaultProps = {
    id: false,
    maxWidth: false,
    minWidth: 0,
    inline: false,
    leftTextAlign: false,
    centerTextAlign: false,
    left: false,
    right: false,
    relative: false,
    absolute: false,
    inSpace: 0,
    outSpace: 0,
    className: null,
    //Positions
    centerLeft: false,
    centerRight: false,
    center: false,
    bottomRight: false,
    bottomLeft: false,
    bottomCenter: false,
    topRight: false,
    topLeft: false,
    topCenter: false,
    //Events
    onMouseOver: e => {},
    onMouseLeave: e => {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      maxWidth,
      minWidth,
      inline,
      leftTextAlign,
      centerTextAlign,
      left,
      right,
      relative,
      absolute,
      inSpace,
      outSpace,
      className,
      centerLeft,
      centerRight,
      center,
      bottomRight,
      bottomLeft,
      bottomCenter,
      topRight,
      topLeft,
      topCenter,
      onMouseOver,
      onMouseLeave
    } = this.props;
    let classNames = classnames({
      [style["Container--maxWidth"]]:maxWidth,
      [style["Container--minWidth"]]:minWidth,
      [style["Container--inline"]]:inline,
      [style["Container--leftTextAlign"]]:leftTextAlign,
      [style["Container--centerTextAlign"]]:centerTextAlign,
      [style["Container--left"]]:left,
      [style["Container--right"]]:right,
      [style["Container--relative"]]:relative,
      [style["Container--absolute"]]:absolute,
      [style["Container--inSpace"]]:inSpace,
      [style["Container--outSpace"]]:outSpace,
      [style["Container--centerLeft"]]:centerLeft,
      [style["Container--centerRight"]]:centerRight,
      [style["Container--center"]]:center,
      [style["Container--bottomRight"]]:bottomRight,
      [style["Container--bottomLeft"]]:bottomLeft,
      [style["Container--bottomCenter"]]:bottomCenter,
      [style["Container--topRight"]]:topRight,
      [style["Container--topLeft"]]:topLeft,
      [style["Container--topCenter"]]:topCenter,
      [style["Container--onMouseOver"]]:onMouseOver,
      [style["Container--onMouseLeave"]]:onMouseLeave
    });
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.Container}${classNames} ${className}`}
           id={id}
           style={{maxWidth: `${maxWidth ? maxWidth : "auto"}`, minWidth: `${minWidth ? minWidth : "auto"}`}}
           onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {this.props.children}
      </div>
    );
  }
}
