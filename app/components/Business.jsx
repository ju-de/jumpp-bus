import { Reapp, React, View, BackButton } from 'reapp-kit';

class Business extends React.Component {
  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('app')} />

    return (
      <View {...this.props} title="customer" titleLeft={backButton}>
        <p>hey business, whats up!!</p>
      </View>
    );
  }
}

export default Business;
