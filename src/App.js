import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    results: []
  }

  render() {

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      this.setState(data);
    })

    return (
        this.state.results.forEach(user => (
          <View>
            <Text>{user.name.first}</Text>
            <Text>{user.name.last}</Text>
            <Text>{user.email}</Text>
          </View>
        ))
    );
  }
}


