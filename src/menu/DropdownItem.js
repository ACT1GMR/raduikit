import React, {Component} from "react";
import style from "../../styles/modules/menu/DropdownItem.scss";
import ListItem from "../list/ListItem";

export default class extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem selection invert onSelect={this.props.onSelect}>
        <div className={style.DropdownItem}>{this.props.children}</div>
      </ListItem>
    );
  }
}