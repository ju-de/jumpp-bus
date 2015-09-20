import { React, Tappable } from 'reapp-kit';

var styles = {

  logo: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 2,
    fontFamily: 'serif', 
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '60px',
    lineHeight: '100px',
    color: '#00FFBB'
  }

};


class Splash extends React.Page {
  render() {
    return (
      <div style={{
        width: '480px',
        margin: '180px auto 48px'
      }}>
        <Tappable style={styles.logo} onTap={() => this.router().transitionTo('app')}>
          jumpp
        </Tappable>
        {this.props.children}
      </div>
    );
  }
};

export default Splash;
