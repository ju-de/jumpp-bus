import { Reapp, React, NestedViewList, View, List, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';
import moment from 'moment';

import ListPrice from '../shared/ListPrice';
import Order from './Order';

var styles = {

  subheading: {
    lineHeight: '48px',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#999',
    fontSize: '14px',
    letterSpacing: '0.4em'
  },

  orders: {
    position: 'absolute',
    top: 0,
    left: '24px',
    bottom: 0,
    width: '280px',
    overflow: 'auto',
    padding: '24px 0px'
  },

  order: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: '304px',
    zIndex: 9,
    overflow: 'auto'
  }

};

class Orders extends React.Page {

  state = {
    order: null
  }

  selectOrder(order) {
    this.setState({
      order
    });
  }

  componentDidMount() {
    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS/orders');
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'businesses');
  }


  render() {

    return (
      <View {...this.props}>
        <div style={styles.orders}>
          <h3 style={styles.subheading}>Orders</h3>
          <List>
            {
              this.state &&
              this.state.businesses &&
              this.state.businesses.map(obj => {
                var itemId = Object.keys(obj.items)[0];
                var item = obj.items[itemId];
                return (
                  <List.Item
                    title={item.name}
                    after={<ListPrice amount={item.price} />}
                    wrapper={
                      <Button onTap={() => this.selectOrder(obj)} chromeless />
                    }
                    >
                    {'ordered '+moment(obj.timestamp).format('h:mm a, DD/MM/YY')}
                  </List.Item>
                );
              })
            }
          </List>
          <Button onTap={() => this.router().transitionTo('landing')}>
            Done
          </Button>
        </div>
        <div style={styles.order}>
          {this.state.order && <Order order={this.state.order} />}
        </div>
      </View>
    );
  }
};

reactMixin(Orders.prototype, ReactFireMixin);

export default Orders;
