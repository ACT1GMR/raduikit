// src/modal/ModalBody
import React, {Component} from "react";
import "../../styles/modules/modal/ModalMedia.scss";
import $ from "jquery";

export default class ModalMedia extends Component {

  constructor(props) {
    super(props);
    require("fancybox-scopial")(window, window.document, $);
  }

  componentDidMount() {
    $().fancybox(this.props);
  }

  render() {
    return null;
  }
}