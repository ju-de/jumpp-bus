import { Reapp, React, NestedViewList, View, Button, Form, Input } from 'reapp-kit';

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
  state = {
    disableScroll: false
  }

  disableScroll(val) {
    this.setState({
      disableScroll: val
    });
  }

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS');

  }

  render() {
    let child = this.props.child();
    return (
      <div style={styles.self}>
        <NestedViewList
          {...this.props.viewListProps}
          disableScroll={this.state.disableScroll}
          >
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
          {this.props.child({
            disableParentViewList: this.disableScroll 
          })}
        </NestedViewList>

      </div>
    );
  }
}

export default Reapp(App);
