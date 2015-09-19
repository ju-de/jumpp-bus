import { Reapp, React, View, BackButton, Button, Modal, Container, Block, Card, Dots, NestedViewList } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

var food=[ "Received", "In Process", "Ready" ];

class Order extends React.Component {

  componentDidMount(){
    this.orderId = this.router().getCurrentQuery().order;
    this.ref = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS/orders/'+this.orderId);
    this.bindAsArray(this.ref, 'business');
    console(this.ref);
  }

  state={ step: 0 };

  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('orders')} />

    return (
      <View {...this.props} title={"Order "+food[this.state.step]} titleLeft={backButton}>

      <Container>
      <Block {...this.prop}>
        <p>Summary</p>
        <div {...this.props}>

          // <Card title="Chicken dinner">呢个呢个</Card>
          // <Card title="The fuck is tofu even"> eSpicy </Card>
          // <Card title="Extra pickle">Just give them the pickle dude</Card>
        </div>
        <p>Total: $10.00</p>
      </Block>

      <Block {...this.prop} style={{margin: '100px'}, {textAlign: 'center'}}>
        <p>Status</p>
        
        <Dots total={3} active={this.state.step}></Dots>
        <div style={{overflow: 'hidden'}}>
        <NestedViewList 
          scrollToStep={this.state.step}>

            <Button chromeless onTap={() => this.setState({ step: 1 })}>Start Order</Button>

            <Button chromeless onTap={() => this.setState({ step: 2 })}>Finish Order</Button>

            <Button chromeless onTap={() => this.setState({ step: 0 })}>Restart Order</Button>

        </NestedViewList>
        </div>
      </Block>
      </Container>  
      </View>

      // this.progress = this.state.step;
    );
  }
}

reactMixin(Order.prototype, ReactFireMixin);

export default Order;
