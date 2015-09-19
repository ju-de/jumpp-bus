import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class App extends React.Component {
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p>Hello, World!</p>

          <Button onTap={() => this.router().transitionTo('orders')}>
            Business View
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
