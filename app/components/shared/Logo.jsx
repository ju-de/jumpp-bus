import { React, Tappable } from 'reapp-kit';

import tweenState from 'react-tween-state';
import mixin from 'react-mixin';

var styles = {

  self: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 2,
    fontFamily: 'serif', 
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '60px',
    lineHeight: '140px',
    color: '#00FFBB'
  }

};

var Logo = React.createClass({

  mixins: [tweenState.Mixin],

  getInitialState() {
    return {
      scale: this.props.large ? 1 : 0.7,
      translateY: this.props.large ? 80 : -40 
    }; 
  },

  componentWillReceiveProps(props) {
    if (this.props.large !== props.large) {
      this.tweenState('scale', {
        easing: tweenState.easingTypes.easeInOutQuad,
        duration: 200,
        endValue: props.large ? 1 : 0.7 
      });
      this.tweenState('translateY', {
        easing: tweenState.easingTypes.easeInOutQuad,
        duration: 200,
        endValue: props.large ? 80 : -40 
      });
    }
  },

  render() {
    var style = Object.assign({}, styles.self, {
      transform: `scale(${this.getTweeningValue('scale')},${this.getTweeningValue('scale')}) translateY(${this.getTweeningValue('translateY')}px)` 
    });
    return (
      <Tappable onTap={this.props.onTap} style={style}>
        jumpp
      </Tappable>
    );
  }
});

export default Logo;
