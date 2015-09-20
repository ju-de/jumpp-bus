import { Reapp, React, View, Button, Input } from 'reapp-kit';

import Splash from './shared/Splash';

class Login extends React.Page {

  render() {
    return (
      <View style={{textAlign: 'center'}} {...this.props}>
        <Splash>
        
          <Input placeholder={"Username"} id="user" />
          <Input placeholder={"Password"} id="pass" />
          <Button onTap={() => this.router().transitionTo('landing')}>
            Authenticate with OAuth
          </Button>

        </Splash>

      </View>
    );
  }

}

export default Login;
