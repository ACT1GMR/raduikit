// src/input/InputText
import React, {PureComponent} from "react";
import classnames from "classnames";
import style from "../../styles/modules/input/InputText.scss";
import PropTypes from "prop-types";
import Container from "../container";

export default class InputText extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    value: "",
    onChange: e => {
    },
    placeholder: null
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.inputRef = React.createRef();
  }

  focus() {
    this.setState({
      focus: true,
    });
    this.inputRef.current.focus();
  }

  onFocus() {
    this.setState({
      focus: true,
    });
  }

  onBlur() {
    this.setState({
      focus: false,
    });
  }

  render() {
    const {value, onChange, placeholder} = this.props;
    const {focus} = this.state;
    let classNames = classnames({[style["InputText--focus"]]: focus});
    if (classNames) classNames = ` ${classNames}`;
    return (
      <Container className={`${style.InputText}${classNames}`}>
        <input className={style.InputText__Input}
               ref={this.inputRef}
               onChange={onChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               value={value}
               placeholder={placeholder}/>
      </Container>
    );
  }
}
