import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

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