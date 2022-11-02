import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class RandomNumber extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    handlePress = () => {
        if (this.props.isDisabled) {
            return
        } else {
            this.props.onPress(this.props.id)
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>{this.props.number}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#555',
        width: 100,
        textAlign: 'center',
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 30,
    },
    disabled: {
        opacity: 0.5
    }
})
