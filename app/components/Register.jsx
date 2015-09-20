import { Reapp, React, NestedViewList, View, Button, Input, BackButton } from 'reapp-kit';

class Register extends React.Component {

  handleChange() {

    let name = document.getElementById("name").value;
    let location = document.getElementById("loc").value;
    let img = document.getElementById("img").value;

    if(name.length>0 && location.length>0){

      console.log(name+" "+location);

      var firebaseRef = new Firebase('https://jumpp.firebaseio.com');
      var business = firebaseRef.child("business");

      var session = business.push();

      session.set({
        name: name,
        location: location,
        img: img
      });

      console.log(session.key());
      document.cookie = "sessionId="+session.key();
      var sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      console.log(document.cookie);
      console.log(sessionId);

    }

    this.router().transitionTo('menu')
  }

  prefill() {
    document.getElementById("img").value = "Filled";

  }

  render() {
    const backButton =
     <BackButton onTap={() => this.router().transitionTo('app')} />

    return (

      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp" style={{textAlign: 'center'}} titleLeft={backButton}>
          <p>Join Jumpp today !! </p>

            <Input placeholder={"Restaurant name"} id="name" />
            <Input placeholder={"Location"} id="loc" />
            <Input placeholder={"Image URL"} id="img" />

          <Button onTap={this.handleChange}>
            Let's Go!
          </Button>

          <Button chromeless onTap={this.prefill}>
            Prefill
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
