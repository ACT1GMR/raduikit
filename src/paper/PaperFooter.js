// src/content/ContentFooter
import React, { PureComponent } from "react";
import style from "../../styles/modules/paper/PaperFooter.scss";

export default class PaperFooter extends PureComponent {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={style.PaperFooter}>
        {this.props.children}
      </div>
    );
  };
};