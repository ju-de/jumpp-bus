import { Reapp, React, NestedViewList, View, Button, Input } from 'reapp-kit';

class Register extends React.Component {

  handleChange() {

    let name = this.refs.restaurant.getDOMNode().value;
    let location = this.refs.coordinates.getDOMNode().value;

    console.log(name+" "+location);

    var firebaseRef = new Firebase('https://jumpp.firebaseio.com');
    var business = firebaseRef.child("business");

    business.push().set({
      name: name,
      location: location
    });

    this.router().transitionTo('menu')
  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp" style={{textAlign: 'center'}} >
          <p>Join Jumpp today !! </p>

            <Input ref="restaurant" placeholder={"Restaurant name"} />
            <Input ref="coordinates" placeholder={"Location"} />


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
