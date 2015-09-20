import { Reapp, React, NestedViewList, View, Button, Form, Input } from 'reapp-kit';

import Logo from './shared/Logo';
import Splash from './shared/Splash';

var styles = {

  self: {
    fontFamily: 'serif',
    fontSize: '16px',
    lineHeight: '24px'
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
    let child = this.props.child();
    console.log('what am i looking for...', child);
    return (
      <div style={styles.self}>
        <NestedViewList {...this.props.viewListProps}>
          <View>
            <Splash>

              <Button onTap={() => this.router().transitionTo('register')} filled>
                Get Started Now
              </Button>

              <Button onTap={() => this.router().transitionTo('login')} filled>
                Log in with Intuit
              </Button>

              <Button onTap={() => this.router().transitionTo('landing')}>
                Returning User
              </Button>

            </Splash>

          </View>

          {this.props.child()}
        </NestedViewList>

      </div>
    );
  }
}

export default Reapp(App);
