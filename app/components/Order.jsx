import { Reapp, React, View, BackButton, Button, Modal, Container, Block, Card } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

// var states = {
//   {id: '0', name: 'Order Received'},
//   {id: '1', name: 'Start Order'},
//   {id: '2', name: 'Finish Order'}
// }

class Order extends React.Component {

  componentDidMount(){
    this.locationId = this.router().getCurrentQuery().location_id;
    this.ref = new Firebase('https://jumpp.firebaseio.com/business/'+this.locationId);
    this.bindAsArray(this.ref, 'business');
  }

  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('app')} />

    return (
      <View {...this.props} title="Order #000" titleLeft={backButton}>

      <Container>
      <Block {...this.prop}>
        <p>Order Summary</p>
        <div {...this.props}>
          <Card title="Chicken Dinner">呢个呢个</Card>
          <Card>ashdjkfhad</Card>
          <Card>ashdjkfhad</Card>
        </div>
        <p>Total: $10.00</p>
      </Block>

      <Block {...this.prop} style={{margin: '100px'}, {textAlign: 'center'}}>
        <p>order in the courtroom</p>
        <Button chromeless onTap={() => this.setState({ step: 1 })}>Start Order</Button>
      </Block>
      </Container>  
      </View>
    );
  }
}

reactMixin(Order.prototype, ReactFireMixin);

export default Order;
