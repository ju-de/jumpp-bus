import { Reapp, React, NestedViewList, View, Button, Input } from 'reapp-kit';

class Register extends React.Component {

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business');

          // <Button onTap={() => this.router().transitionTo('orders')}>
  }

  handleChange() {
    let name = this.refs.restaurant.getDOMNode().value;
    let location = this.refs.address.getDOMNode().value;

    console.log(name+" "+location);
  }

  pushData() {
    
  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p></p>

            <Input ref="restaurant" placeholder={"Restaurant name"} />
            <Input ref="address" placeholder={"Address"} />


          <Button onTap={this.handleChange}>
            Let's Go!
          </Button>

        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Register);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
