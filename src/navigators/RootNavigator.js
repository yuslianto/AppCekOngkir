import React from 'react';
import { 
    createAppContainer, 
    createStackNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const stackNavigator = createStackNavigator ({
    HomeScreen : {
        screen : Home,
        navigationOptions:{
            title: 'Home',
            header: null
        }
    },
    DetailScreen : {
        screen : Detail,
        navigationOptions:{
            title: 'Detail',
        }
    }
},
{
    initialRouteName: 'HomeScreen'
}
);

const RootNavigator = createAppContainer(stackNavigator);
export default RootNavigator;