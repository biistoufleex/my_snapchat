import React , { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}
// <Counter color={'darkblue'} size={140} />

class Scroll extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />

        <Text style={styles.bigText}> Salut les gens </Text>
        <Text style={styles.bigText}> deuxieme </Text>
        <Text style={styles.bigText}> troisieme </Text>

        <ScrollView horizontal>
        <Text style={styles.bigText}> Salut les gens </Text>
        <Text style={styles.bigText}> deuxieme </Text>
        <Text style={styles.bigText}> troisieme </Text>
        </ScrollView>
      </ScrollView>
    )
  }
}
// <Scroll />

export default function App() {
    return (
      <View style={styles.container}>
      
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  bigText: {
    fontSize: 50,
    color: 'blue',
  }
});
