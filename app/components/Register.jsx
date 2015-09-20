import { React, NestedViewList, View, Button, Input } from 'reapp-kit';

import Splash from './shared/Splash';

class Register extends React.Page {

  handleChange() {

    let name = document.getElementById("name").value;
    let location = document.getElementById("loc").value;
    let description = document.getElementById("blurb").value;
    let mediaUrl = document.getElementById("img").value;

    if(name.length>0 && location.length>0){

      console.log(name+" "+location);

      var firebaseRef = new Firebase('https://jumpp.firebaseio.com');
      var business = firebaseRef.child("business");

      var session = business.push();
      session.set({
        name,
        description,
        location,
        mediaUrl
      });

      console.log(session.key());
      document.cookie = "sessionId="+session.key();
      var sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      console.log(document.cookie);

    }

    this.router().transitionTo('landing')
  }

  prefill() {
    document.getElementById("name").value = "The North Hackery";
    document.getElementById("blurb").value = "In which hackathon hackers hack the north to track their worth";
    document.getElementById("loc").value = "43.472265,-80.544794";
    document.getElementById("img").value = "http://2.bp.blogspot.com/-elJfQpjwufA/VVG_H0VXQWI/AAAAAAAAK5Q/I97ca1CqXrQ/s1600/stuffed-chicken4.png";
  }

  render() {

    return (

      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View style={{textAlign: 'center'}}>
            <Splash>

            <Input placeholder={"Restaurant name"} id="name" />
            <Input placeholder={"Description"} id="blurb" />
            <Input placeholder={"Location"} id="loc" />
            <Input placeholder={"Image URL"} id="img" />

            <Button onTap={this.handleChange}>
              Let's Go!
            </Button>

            <Button chromeless onTap={this.prefill}>
              Prefill
            </Button>

            </Splash>

           </View>

          {this.childRouteHandler()}
        </NestedViewList>
      </View>
    );
  }
}

export default Register;
