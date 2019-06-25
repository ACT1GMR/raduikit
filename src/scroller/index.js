// src/gap/index
import React, {PureComponent} from "react";
import ReactDOM from "react-dom";
import style from "../../styles/modules/scroller/index.scss";
import classnames from "classnames";
import PropTypes from 'prop-types';
import Container from "../container";

const strings = {
  THRESHOLD_UNIT_MULTIPLY: "THRESHOLD_UNIT_MULTIPLY",
  THRESHOLD_UNIT_PIXEL: "THRESHOLD_UNIT_PIXEL"
};
export default class extends PureComponent {


  static propTypes = {
    threshold: PropTypes.number,
    thresholdUnit: PropTypes.string,
    className: PropTypes.string,
    onScrollBottom: PropTypes.func,
    onScrollTop: PropTypes.func,
    onScrollBottomThreshold: PropTypes.func,
    onScrollBottomThresholdCondition: PropTypes.bool,
    onScrollTopThreshold: PropTypes.func,
    onScrollTopThresholdCondition: PropTypes.bool,
  };

  static defaultProps = {
    threshold: 0,
    thresholdUnit: strings.THRESHOLD_UNIT_MULTIPLY,
    className: null,
    onScrollBottom: null,
    onScrollTop: null,
    onScrollBottomThreshold: null,
    onScrollBottomThresholdCondition: null,
    onScrollTopThreshold: null,
    onScrollTopThresholdCondition: null
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.scrollerNode = React.createRef();
    this.lastScrollPosition = null;
    this._beforeScrollHeight = null;
    this._beforeScrollTop = null;
    this._onScrollTopThresholdReached = false;
  };

  componentDidUpdate(oldProps) {
    const {children: oldChildren} = oldProps;
    const {children} = this.props;
    if (this._onScrollTopThresholdReached) {
      if (oldChildren !== children) {
        const current = ReactDOM.findDOMNode(this.scrollerNode.current);
        this._onScrollTopThresholdReached = false;
        current.scrollTop =
          current.scrollHeight -
          this._beforeScrollHeight +
          this._beforeScrollTop;
      }
    }
  }

  gotoBottom() {
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    current.scrollTop = current.scrollHeight;
  }

  gotoElement(elementId) {
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    current.scrollTop = current.scrollHeight;
  }

  onScroll() {
    const {onScrollBottomEnd, onScrollBottom, onScrollTop, onScrollBottomThreshold, onScrollTopThreshold, threshold, onScrollBottomThresholdCondition, onScrollTopThresholdCondition} = this.props;
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    const scrollHeight = current.scrollHeight;
    const scrollTop = current.scrollTop;
    const scrollPosition = current.offsetHeight + scrollTop;
    if (scrollPosition >= scrollHeight) {
      if (onScrollBottomEnd) {
        onScrollBottomEnd();
      }
    }
    if (scrollPosition > this.lastScrollPosition) {
      if (onScrollBottom) {
        onScrollBottom();
      }
      if (onScrollBottomThreshold) {
        if (onScrollBottomThresholdCondition === null || onScrollBottomThresholdCondition) {
          if (scrollPosition >= (scrollHeight / threshold)) {
            onScrollBottomThreshold();
          }
        }
      }
    } else if (scrollPosition < this.lastScrollPosition) {
      if (onScrollTop) {
        onScrollTop();
      }
      if (onScrollTopThreshold) {
        if (onScrollTopThresholdCondition === null || onScrollTopThresholdCondition)
          if (scrollPosition <= (scrollHeight / threshold)) {
            this._beforeScrollHeight = scrollHeight;
            this._beforeScrollTop = scrollTop;
            this._onScrollTopThresholdReached = true;
            onScrollTopThreshold();
          }
      }
    }
    this.lastScrollPosition = scrollPosition;
  }

  render() {
    const {threshold, thresholdUnit, className, children} = this.props;
    let classNames = classnames({
      [style.Scroller]: true,
      [className]: className
    });
    return (
      <Container className={classNames} onScroll={this.onScroll} ref={this.scrollerNode}>
        {this.props.children}
      </Container>
    );
  }
}
