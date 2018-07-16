import "../_base";
import React, {Component} from "react";
import style from "../../styles/modules/navigation/index.scss";
import {DropdownMenu} from "reactstrap";

export default class DropDown extends Component {

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
      <DropdownMenu>
        {this.props.children}
      </DropdownMenu>
    );
  }
}