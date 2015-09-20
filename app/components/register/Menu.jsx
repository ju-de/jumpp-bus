import { Reapp, React, NestedViewList, View, Button, Input , Block, Container} from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

class Menu extends React.Page {

  componentDidMount() {
    var sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/'+sessionId);
    this.bindAsArray(this.firebaseRef.child('menus').limitToLast(25), 'foods');


  }

  handleChange() {

    let item = document.getElementById("itm").value;
    let price = document.getElementById("val").value;
    let img = document.getElementById("url").value;

    document.getElementById("itm").value='';
    document.getElementById("val").value='';
    document.getElementById("url").value='';

    if(item.length>0 && price.length>0){
      console.log(item+ " added!");
      
      var sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      var firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/'+sessionId);
      var menuItem = firebaseRef.child("menus");


      menuItem.push().set({
        name: item,
        price: price,
        img: img
      });
    }
  }

  prefill() {
    document.getElementById("url").value = "Filled";
  }

  removeItem() {
    this.firebaseRef.remove();
  }

  render() {
    console.log(this.state && this.state.foods)

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p> Make your menu </p>

          <Container>

            <Block>
             <Input id="itm" placeholder={"Item Name"} />
            </Block>

            <Block>
              <Input id="val" placeholder={"Price"} />
            </Block>

            <Block>
              <Input id="url" placeholder={"Image URL"} />
            </Block>

          </Container>

          <Button onTap={this.handleChange}>
            Add
          </Button>

          <Button onTap={() => this.router().transitionTo('landing')}>
            Done
          </Button>

          <Button chromeless onTap={this.prefill}>
            Prefill
          </Button>

        <div style={{margin:'50px'}}>
            {
              this.state &&
              this.state.foods &&
              this.state.foods.map((obj) => {
                return (
                  <Button onTap={this.removeItem}>
                     {obj.name} - ${obj.price}
                  </Button>
                );
              })


            }
        </div>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
}

reactMixin(Menu.prototype, ReactFireMixin);

export default Menu;

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
