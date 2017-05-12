import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'; 

import Styles from './Styles/CounterStyles';

import SampleActions from '../Redux/ReduxSample';


class Counter extends Component{ 

    static PropTypes = {
        counter : PropTypes.number,
        increment: PropTypes.func,
        decrement: PropTypes.func
    }
    constructor(props){
        super(props);
    }
    handlePressIncrement = () => {
        this.props.increment();
    }

    handlePressDecrement = () => {
        this.props.decrement();
    }

    render () {
        const { counter: number} = this.props;
        return (
            <View style={Styles.wrapper}>
                <Text style={Styles.TitleNumber}>{number}</Text>
                <TouchableHighlight
                    onPress={this.handlePressIncrement}
                    style={Styles.button}>
                    <Text style={Styles.buttonText}> Increment</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.handlePressDecrement}
                    style={Styles.button}>
                    <Text style={Styles.buttonText}> Decrement</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        counter : state.sample.counter
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        increment : ()  =>  dispatch(SampleActions.increment()),
        decrement : ()  =>  dispatch(SampleActions.decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);