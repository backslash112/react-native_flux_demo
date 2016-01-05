/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 'use strict';

 var React = require('react-native');
 var TaskList = require('./source/components/TaskList');
 var AddTask = require('./source/components/AddTask');

 var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var ReactNativeFluxDemo = React.createClass({
render: function() {
  return (
    <NavigatorIOS ref='nav' style={styles.container} initialRoute={{
      title: 'To-Do List',
      component: TaskList,
      rightButtonTitle: 'New',
      onRightButtonPress: ()=>{
        this.refs.nav.push({
          title: 'New',
          component: AddTask
        });
      }
    }} />
  );
}

});

AppRegistry.registerComponent('ReactNativeFluxDemo', () => ReactNativeFluxDemo);
