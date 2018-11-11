// src/input/InputText
import React, {PureComponent} from "react";
import classnames from "classnames";
import ReactDOM from "react-dom";
import style from "../../styles/modules/input/InputTextArea.scss";
import PropTypes from "prop-types";
import Container from "../container";
import {Text} from "../typography";
import Gap from "../gap";

export default class InputTextArea extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string
  };

  static defaultProps = {
    value: null,
    className: null,
    inputClassName: null,
    onChange: e => {
    },
    placeholder: null
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.onBlur = this.onBlur.bind(this);
    this.inputRef = React.createRef();
  }

  focus() {
    this.setState({
      focus: true,
    });
    ReactDOM.findDOMNode(this.inputRef.current).focus();
  }

  setCaretToEnd() {
    const node = ReactDOM.findDOMNode(this.inputRef.current);
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(node);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    node.focus();
    range.detach();
  }

  componentDidUpdate() {
    this.setCaretToEnd();
  }

  onBlur() {
    this.setState({
      focus: false,
    });
  }

  render() {
    const {value, onChange, placeholder, className, inputClassName} = this.props;
    const {focus} = this.state;
    const hasValue = value && value.trim();
    const classNames = classnames({
      [style.InputTextArea]: true,
      [style["InputTextArea--focus"]]: focus,
      [className]: className
    });
    const inputClassNames = classnames({
      [style.InputTextArea__Input]: true,
      [inputClassName]: true,
      [className]: className
    });
    return (
      <Container className={classNames}>
        {!hasValue &&
        <Container centerRight>
          <Gap x={15}>
            <Text size="sm">{placeholder}</Text>
          </Gap>
        </Container>
        }
        <Container
          contentEditable="true"
          suppressContentEditableWarning="true"
          className={inputClassNames}
          ref={this.inputRef}
          onInput={onChange}>{value}</Container>
      </Container>
    );
  }
}
