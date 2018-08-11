// src/loading/Dropdown
import React, {Component} from "react";
import style from "../../styles/modules/menu/Dropdown.scss";
import classnames from "classnames";
import List from "../list/index";

export default class Dropdown extends Component {

  static defaultProps = {
    isOpen: false,
    onClose: e => {
    }
  };

  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  handleClickOutside(event) {
    const current = this.container.current;
    const {isOpen, onClose} = this.props;
    if (onClose) {
      if (current && !current.contains(event.target)) {
        if (isOpen) {
          onClose();
        }
      }
    }
  }

  render() {
    const {isOpen} = this.props;
    return isOpen ?
      <div className={style.Dropdown} ref={this.container}>
        <List>
          {this.props.children}
        </List>
      </div>
      : ""
  }
}