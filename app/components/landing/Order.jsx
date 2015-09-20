import { Reapp, React, View, BackButton, Button, Modal, Container, Block, Card, Dots, NestedViewList } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

var food=[ "Received", "In Process", "Ready" ];

class Order extends React.Page {

  state = {
    step: 0 
  }

  componentDidMount(){
    this.orderId = this.props.order['.key'];
    this.ref = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS/orders/'+this.orderId);
    this.bindAsArray(this.ref, 'order');
    // console.log(this.orderId);
    console.log(this.ref.child('progress'));
    this.bindAsObject(this.ref.child('progress'), progress);
  }

  componentWillUpdate(props, state) {
    // sync wih fb
    this.ref.child('progress').set(state.step);
  }

  render() {  

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('orders')} />

    return (
      <View {...this.props} title={"Order "} titleLeft={backButton}>

      <Container>
      <Block {...this.prop} style={{margin: '100px'}, {textAlign: 'center'}}>
        <p>{food[this.state.step]}</p>
        
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
    );
  }
}

reactMixin(Order.prototype, ReactFireMixin);

export default Order;
