import { Reapp, React, View, BackButton, Button, Modal, Container, Block, Card } from 'reapp-kit';


import reactMixin from 'react-mixin';

// var states = {
//   {id: '0', name: 'Order Received'},
//   {id: '1', name: 'Start Order'},
//   {id: '2', name: 'Finish'}
// }

class Business extends React.Component {

  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('app')} />

    return (
      <View {...this.props} title="Order Summary" titleLeft={backButton}>

      <Container>
      <Block {...this.prop}>
        <p>Literally Orders</p>
        <div {...this.props}>
          <Card>ashdjkfhad</Card>
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

export default Business;
