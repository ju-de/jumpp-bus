import { Reapp, React, NestedViewList, View, Button, Input } from 'reapp-kit';

class Login extends React.Page {

  render() {
    return (

      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp" style={{textAlign: 'center'}}>
          <p>Log in with Intuit </p>

            <Input placeholder={"Username"} id="user" />
            <Input placeholder={"Password"} id="pass" />

          <Button onTap={() => this.router().transitionTo('landing')}>
            Authenticate with OAuth
          </Button>

         </View>

        {this.childRouteHandler()}
      </NestedViewList>
      });

}

export default Login;

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
