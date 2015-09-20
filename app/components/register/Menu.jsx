import { Reapp, React, NestedViewList, View, Button, Input , Block, Container} from 'reapp-kit';

class Menu extends React.Page {

  handleChange() {

    let item = this.refs.item.getDOMNode().value;
    let price = this.refs.price.getDOMNode().value;

    if(item.length>0 && price.length>0){
      console.log(item+ " added!");
      
      var sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      var firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/'+sessionId);
      var menuItem = firebaseRef.child("menus");

      menuItem.push().set({
        name: item,
        price: price
      });
    }
  }

  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="jumpp">
          <p> Make your menu </p>

          <Container>
            
            <Block>
            <Input ref="item" placeholder={"Item"} />
            </Block>

            <Block>
            <Input ref="price" placeholder={"Price"} />
            </Block>

          </Container>

          <Button onTap={this.handleChange}>
            Add
          </Button>

          <Button onTap={() => this.router().transitionTo('landing')}>
            Done
          </Button>

        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
}

export default Menu;

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/
