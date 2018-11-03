// src/modal/ModalBody
import React, {Component} from "react";
import "../../styles/modules/modal/ModalMedia.scss";

export default class ModalMedia extends Component {

  constructor(props) {
    super(props);
    window.jQuery = require("jquery");
    require("@fancyapps/fancybox");
  }

  componentDidMount() {
    jQuery().fancybox(this.props);
  }

  render() {
    return null;
  }
}