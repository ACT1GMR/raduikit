import React, {Component} from "react";
import style from "../../styles/modules/navigation/Dropdown.scss";
import {MdClose} from "react-icons/lib/md";
import classnames from "classnames";
import List from "../list/index";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.container = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside.bind(this));
  }

  handleClickOutside(event) {
    const current = this.container.current;
    const {isOpen, onClose} = this.props;
    if(onClose){
      if (current && !current.contains(event.target)) {
        if (isOpen) {
          onClose();
        }
      }
    }
  }


  render() {
    const {isOpen} = this.props;
    let classNames = classnames({[style["Dropdown--Open"]]: isOpen});
    if (classNames) classNames = ` ${classNames}`;
    return isOpen ?
      <div className={style.Dropdown} ref={this.container}>
        <List>
          {this.props.children}
        </List>
      </div>
      : ""
  }
}