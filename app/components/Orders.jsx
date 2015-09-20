import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

class Orders extends React.Component {

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS/orders');
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'businesses');
  }


  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('app')} />

    return (
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View style={{textAlign: 'center'}} > 
            <p>Click an order to see more details.</p>
            {
              this.state &&
              this.state.businesses &&
              this.state.businesses.map((obj) => {
                return (
                  <Button onTap={() => this.router().transitionTo('order', null, { order_id: obj['.key'] })}>
                    Order {obj.timestamp}
                  </Button>
                );
              })
            }
          </View>
          
            {this.props.child()}
        </NestedViewList>
      </View>
    );
  }
};

reactMixin(Orders.prototype, ReactFireMixin);

export default Reapp(Orders);