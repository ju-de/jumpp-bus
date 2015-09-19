import { Reapp, React, NestedViewList, View, BackButton, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';

class Orders extends React.Component {

  componentDidMount() {
    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business');
    this.bindAsArray(this.firebaseRef.limitToLast(25), 'businesses');
  }

  render() {
    return (
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View>
            <p>Hello, from the locations route!</p>
            {
              this.state &&
              this.state.businesses &&
              this.state.businesses.map((obj) => {
                return (
                  <Button onTap={() => this.router().transitionTo('location', null, { location_id: obj['.key'] })}>
                    name: {obj.name}
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
