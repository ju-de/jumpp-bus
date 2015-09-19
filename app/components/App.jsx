import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class App extends React.Component {

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS');

  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p>Welcome back, </p>

          <Button onTap={() => this.router().transitionTo('orders')}>
            Active Orders
          </Button>

        </View>

        {this.props.child()}
      </NestedViewList>
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
