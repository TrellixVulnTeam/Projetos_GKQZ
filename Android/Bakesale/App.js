/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import reducers from '../reducers/PeopleReducer'
 
 const store = createStore(reducers);

 export default class App extends Component {
   render() {
     return (
       <Provider store={store}>
         <View style={styles.container}>
           <Text style={styles.welcome}>Welcome to CRM2!</Text>
         </View>
       </Provider>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });
 