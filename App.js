import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import RootNavigator from "./src/navigators/RootNavigator";


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator/>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});