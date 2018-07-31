// src/list/List.
import React, {Component} from "react";
import classnames from "classnames";
import style from "../../styles/modules/input/InputText.scss";

export default class InputText extends Component {

  static defaultProps = {
    selection: false,
    active: false,
    onClick: null
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  onFocus(){
    this.setState({
      focus: true
    })
  }

  onBlur(){
    this.setState({
      focus: false
    })
  }

  render() {
    const {value, onChange, placeholder} = this.props;
    const {focus} = this.state;
    let classNames = classnames({[style["InputText--focus"]]: focus});
    if (classNames) classNames = ` ${classNames}`;
    return (
      <div className={`${style.InputText}${classNames}`}>
        <input className={style.InputText__Input} onChange={onChange} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} value={value} placeholder={placeholder}/>
      </div>
    );
  }
}
