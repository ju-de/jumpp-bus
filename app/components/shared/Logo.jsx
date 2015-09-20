import { React, Tappable } from 'reapp-kit';

var Logo = React.createClass({

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
