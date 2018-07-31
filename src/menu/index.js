import React, {Component} from "react";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import style from "../../styles/modules/navigation/index.scss";

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    }
  }

  onToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}

export {Dropdown, DropdownItem};