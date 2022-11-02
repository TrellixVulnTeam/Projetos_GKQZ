import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { priceDisplay } from './util'

export default class DealItem extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }
    handlerPress = () => {
        this.props.onPress(this.props.deal.key)
    }
    render() {
        const { deal } = this.props
        return (
            <TouchableOpacity style={styles.content} onPress={this.handlerPress}>
                <View style={styles.deal}>
                    <Image source={{ uri: deal.media[0] }} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{deal.title}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.cause}>{deal.cause.name}</Text>
                            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 150,
    },
    info: {
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row'
    },
    cause: {
        flex: 2
    },
    price: {
        alignContent: 'flex-end'
    },
})
