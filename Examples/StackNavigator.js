//npm install react-navigation-stack
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IconExample from './IconExample';
import FlatListExample from './FlatListExample';

const screens = {
    IconExample: {
        screen: IconExample
    },
    FlatListExample: {
        screen: FlatListExample
    }
}

const StackNavigator = createStackNavigator(screens);

export default createAppContainer(StackNavigator);
