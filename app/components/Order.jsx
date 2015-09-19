import { Reapp, React, View, BackButton, Button, Modal, Container, Block, Card, Dots, DottedViewList } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

// var states = {
//   {id: '0', name: 'Start Order'},
//   {id: '1', name: 'Finish Order'},
//   {id: '2', name: 'Restart Order'}
// }


class Order extends React.Component {

  componentDidMount(){
    this.locationId = this.router().getCurrentQuery().location_id;
    this.ref = new Firebase('https://jumpp.firebaseio.com/business/'+this.locationId);
    this.bindAsArray(this.ref, 'business');
  }

  render() {

    this.state={ step: 0 };

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
        <div style={{overflow: 'hidden'}}>
        <DottedViewList 
          scrollToStep={this.state.step}>

          
            <Button chromeless onTap={() => this.setState({ step: 1 })}>Start Order</Button>

            <Button chromeless onTap={() => this.setState({ step: 2 })}>Finish Order</Button>

            <Button chromeless onTap={() => this.setState({ step: 0 })}>Restart Order</Button>

        </DottedViewList>
        </div>
      </Block>
      </Container>  
      </View>
    );
  }
}

reactMixin(Order.prototype, ReactFireMixin);

export default Order;
