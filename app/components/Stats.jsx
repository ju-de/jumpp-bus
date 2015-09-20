import { Reapp, React, NestedViewList, View, BackButton, Card, Button } from 'reapp-kit';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import reactMixin from 'react-mixin';
var ZingChart = require('zingchart-react').core;
var today = new Date();
var expiredDay = new Date();
expiredDay.setDate(today.getDate() - 20);
var center = {
	"margin-left":'auto',
	"margin-right":'auto'
}

class Stats extends React.Component {

  componentWillMount() {
    this.ref = new Firebase('https://jumpp.firebaseio.com');
    this.analyticsRef = new Firebase('https://jumpp.firebaseio.com/analytics');
    this.bindAsArray(this.ref.child('orders'), 'orders');
    this.bindAsArray(this.ref.child('customers'), 'customers');
    this.bindAsArray(this.analyticsRef.child('dailyRevenues'), 'dailyRevenues');
    this.bindAsArray(this.analyticsRef.child('totalRevenues'), 'totalRevenues');
    this.bindAsArray(this.analyticsRef.child('totalCustomers'), 'totalCustomers');
  }

  calculateDailyRevenue(){
    var orders = this.state.orders;
    var revenue = 0;
    for (var n = 0; n < orders.length; n++){
      var date = new Date(orders[n].time*1000);
      if(today.toDateString() == date.toDateString()){
        revenue += orders[n].price;
      }
    }
    return revenue;
  }

  calculateTotalRevenue(){
    var orders = this.state.orders;
    var revenue = 0;
    for (var n = 0; n < orders.length; n++){
      revenue += orders[n].price;
    }
    return revenue;
  }

  calculateTotalCustomers(){
    var totalCustomers = this.state.customers.length
    return totalCustomers;
  }

  updateDatabase(){
    var dailyRevenueRef = new Firebase('https://jumpp.firebaseio.com/analytics/dailyRevenues');
    var updateTodayObj = {}
    updateTodayObj[today.toDateString()] = this.calculateDailyRevenue();
    dailyRevenueRef.update(updateTodayObj);
    dailyRevenueRef.child(expiredDay.toDateString()).remove();

    var totalRevenueRef = new Firebase('https://jumpp.firebaseio.com/analytics/totalRevenues');
    var updateTotalObj = {} 
    updateTotalObj[today.toDateString()] = this.calculateTotalRevenue();
    totalRevenueRef.update(updateTotalObj);
    totalRevenueRef.child(expiredDay.toDateString()).remove();

    var totalCustomersRef = new Firebase('https://jumpp.firebaseio.com/analytics/totalCustomers');
    var updateCustomersObj = {} 
    updateCustomersObj[today.toDateString()] = this.calculateTotalCustomers();
    totalCustomersRef.update(updateCustomersObj);
    totalCustomersRef.child(expiredDay.toDateString()).remove();
  }

  setRevenueGraph(){
  	var totalRevenues = this.state.totalRevenues;
    var dailyRevenues = this.state.dailyRevenues;
    var date = [];
    var totalValues = [];
    var dailyValues = [];

    for (var n = 0; n < totalRevenues.length; n++){
    	date.push(totalRevenues[n][".key"]);
    	totalValues.push(totalRevenues[n][".value"]);
    	dailyValues.push(dailyRevenues[n][".value"]);
    }

    var myConfig = {
      "type": "area",
      "scale-x" : {
      				values : date
      },
      "series" : [
          {		
          		text : "Total Revenues",
              values : totalValues
          },
          {
          		text : "Daily Revenues",
          		values : dailyValues
          }
      ],
      "legend": true
    };
  	return myConfig
  }

  setCustomerGraph(){
    var totalCustomers = this.state.totalCustomers;
    var date = [];
    var totalValues = [];

    for (var n = 0; n < totalCustomers.length; n++){
    	date.push(totalCustomers[n][".key"]);
    	totalValues.push(totalCustomers[n][".value"]);
    }

    var myConfig = {
      "type": "area",
      "scale-x" : {
      				values : date
      },
      "series" : [
          {		
          		text : "Total Customers",
              values : totalValues
          },
      ],
      "legend": true
    };
  	return myConfig
  }

  render() {

    const backButton =
      <BackButton onTap={() => this.router().transitionTo('app')} />

    return (
      <View {...this.props}>
        <NestedViewList {...this.props.viewListProps}>
          <View style={{textAlign: 'center'}}> 
            <Card title="Total revenue" children = {this.calculateTotalRevenue() + " $"} />
            <Card title="Today revenue" children = {this.calculateDailyRevenue() + " $"} />
            <Card title="Total Customers" children = {this.calculateTotalCustomers()} />
            <h1> Revenues </h1>
            <div style={center}>
            	<ZingChart id="myChart" height="400" width="800" data={this.setRevenueGraph()} theme="light" />
            </div>
          	<h1> Customers </h1>
          	<div style={center}>
            	<ZingChart id="myChart2" height="400" width="800" data={this.setCustomerGraph()} theme="light" />
            </div>
          </View>
          {this.props.child()}
        </NestedViewList>
      </View>
    );
  }
};

reactMixin(Stats.prototype, ReactFireMixin);

export default Reapp(Stats);