import '../Config';

import React, {Component, PropTypes}  from 'react';
import {Provider} from 'react-redux';
// import RootContainer from './RootContainer';
import createStore from '../Redux';
import Counter from '../Components/Counter';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'

//create our store

const store = createStore();

console.log(store.getState())

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <View>
                    <Counter/>
                </View>
            </Provider>
        )
    }
}

export default App;