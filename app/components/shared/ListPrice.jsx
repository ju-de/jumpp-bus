import { React } from 'reapp-kit';

var styles = {
  self: {
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'right',
    width:'60px',
    height: '60px',
    fontSize: '16px',
    lineHeight: '60px',
    color: '#666'
  }
};

class ListPrice extends React.Component {

  render() {
    return (
      <div style={styles.self}>
        {'$' + this.props.amount.toFixed(2)}
      </div>
    );
  }
};

export default ListPrice;
