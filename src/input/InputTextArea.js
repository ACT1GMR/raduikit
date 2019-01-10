// src/input/InputText
import React, {PureComponent} from "react";
import sanitizeHtml from "sanitize-html";
import ContentEditable from "react-contenteditable";
import classnames from "classnames";
import PropTypes from "prop-types";
import Container from "../container";
import {Text} from "../typography";
import Gap from "../gap";
import style from "../../styles/modules/input/InputTextArea.scss";

export default class InputTextArea extends PureComponent {

  static propTypes = {
    value: PropTypes.string,
    sanitizeRule: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    inputClassName: PropTypes.string
  };

  static defaultProps = {
    value: null,
    sanitizeRule: null,
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
    this.onInput = this.onInput.bind(this);
    this.contentEditable = React.createRef();
  }

  focus() {
    this.setState({
      focus: true,
    });
    this.contentEditable.current.focus();
  }

  sanitize(initValue) {
    const {value, sanitizeRule} = this.props;
    return sanitizeHtml(initValue || value, sanitizeRule);
  }

  onBlur(e) {
    const {onChange} = this.props;
    let html = e.target.innerHTML;
    if (!html) {
      html = "";
    } else {
      html = html.trim();
      if (html === "<br>") {
        html = "";
      } else {
        html = this.sanitize(e.target.innerHTML);
      }
    }
    if (onChange) {
      onChange(html);
    }
  }

  onInput(evt) {
    const {onChange} = this.props;
    if (onChange) {
      onChange(evt.target.value);
    }
  }

  render() {
    const {value, placeholder, className, inputClassName} = this.props;
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
        <ContentEditable
          innerRef={this.contentEditable}
          className={inputClassNames}
          tagName="pre"
          html={value}
          onBlur={this.onBlur}
          onChange={this.onInput}
        />
      </Container>
    );
  }
}
