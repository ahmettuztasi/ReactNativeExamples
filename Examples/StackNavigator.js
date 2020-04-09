//npm install react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IconExample from './IconExample';
import FlatListExample from './FlatListExample';

const screens = {
    IconExample: {
        screen: IconExample,
        navigationOptions: {
            title: 'Icon Example',
            headerStyle: { backgroundColor: '#333' }
        }
    },
    FlatListExample: {
        screen: FlatListExample,
        navigationOptions: {
            title: 'Flatlist Example',
            headerStyle: { backgroundColor: '#eee' }
        }
    }
}

const StackNavigator = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default createAppContainer(StackNavigator);
