import { Reapp, React, NestedViewList, View, Button, Form, Input, BackButton } from 'reapp-kit';

class Landing extends React.Page {

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS');

  }

  render() {

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p>Welcome back !!</p>

          <Button onTap={() => this.router().transitionTo('orders')}>
            Check Active Orders
          </Button>

          <Button onTap={() => this.router().transitionTo('menu')}>
            Edit Your Menu
          </Button>

          <Button onTap={() => this.router().transitionTo('stats')}>
            View Analytics
          </Button>

        </View>
        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
}

export default Landing;
