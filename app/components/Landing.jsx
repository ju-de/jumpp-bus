import { React, NestedViewList, Tappable, View, Button, Form, Input, BackButton } from 'reapp-kit';

import Splash from './shared/Splash';

var styles = {
  
  nav: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '60px',
    zIndex: 10,
    fontStyle: 'italic',
    backgroundColor: '#fff',
    color: '#ff00c3',
  },

  navlink: {
    width: '60px',
    height: '60px',
    lineHeight: '60px',
    textAlign: 'center'
  }

};

class Landing extends React.Page {

  state = {
    nestedViewIndex: 1,
    disableScroll: false
  }

  disableScroll(val) {
    this.setState({
      disableScroll: val
    });
  }

  componentDidMount() {

    this.firebaseRef = new Firebase('https://jumpp.firebaseio.com/business/-JzZjUM48rtjWMzPBujS');

  }

  render() {

    return (
      <View {...this.props}>

      <NestedViewList
        {...this.routedViewListProps({
           onViewEntered: i => {
             this.props.disableParentViewList(i > 0);
             this.setState({ nestedViewIndex: i })
           }
        })}
        onViewEntering={i => this.setState({ nestedViewIndex: i })}
        >
        <View>
          <Splash>
            <Button onTap={() => this.router().transitionTo('orders')} filled>
              Check Active Orders
            </Button>

            <Button onTap={() => this.router().transitionTo('menu')} filled>
              Edit Your Menu
            </Button>

            <Button onTap={() => this.router().transitionTo('stats')} filled>
              View Analytics
            </Button>
          </Splash>

        </View>

        {this.childRouteHandler({disableParentViewList: this.disableScroll})}

        </NestedViewList>

      </View>
    );
  }
}

export default Landing;
