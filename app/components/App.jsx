import { Reapp, React, NestedViewList, View, Button, Form, Input } from 'reapp-kit';

import Logo from './shared/Logo';

var styles = {

  self: {
    fontFamily: 'serif',
    fontSize: '16px',
    lineHeight: '24px'
  },

  scrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: '200px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))'
  },
  
  welcome: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#999',
    marginTop: '240px'
  },

  search: {
    padding: '12px 0 11px',
    marginBottom: '12px',
    textAlign: 'center',
    fontSize: '28px',
    lineHeight: '48px',
    borderBottom: '1px solid #00FFBB'
  }

}

class App extends React.Component {

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS');

  }

  render() {
    return (
      <div style = {styles.self}>
        <NestedViewList {...this.props.viewListProps}>
          <View title="jumpp">


            <Button onTap={() => this.router().transitionTo('register')}>
              Get Started Now
            </Button>

            <Button onTap={() => this.router().transitionTo('landing')}>
              Returning User
            </Button>

            <Button onTap={() => this.router().transitionTo('login')}>
              Log in with Intuit
            </Button>

          </View>

          {this.props.child()}
        </NestedViewList>

      </div>
    );
  }
}

export default Reapp(App);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
