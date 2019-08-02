import React, { Component } from "react";
import { 
  View,
  StyleSheet
} from "react-native";
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
  }
});