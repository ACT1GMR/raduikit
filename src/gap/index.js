import React, {Component} from "react";
import style from "../../styles/modules/gap/index.scss";
import classnames from "classnames";

export default class Gap extends Component {

  static defaultProps = {
    x: false,
    y: false,
    unit: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {x, y, unit} = this.props;
    let inlineStyle = {};
    inlineStyle.padding = `${y || 0}${y ? unit || "px" : ""} ${x || 0}${x ? unit || "px": ""}`;
    return (
      <span className={style.Gap} style={inlineStyle}>
        {this.props.children}
      </span>
    );
  }
}