import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Linking, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { priceDisplay } from './util'
import ajax from '../ajax'

export default class DealDetail extends Component {
    static propTypes = {
        initialData: PropTypes.string.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    state = {
        deal: []
    }
    async componentDidMount() {
        const deals = await ajax.fetchDealDetail(this.props.initialData)
        this.setState({ deal: deals })
    }
    openDealURL = () => {
        Linking.openURL(this.state.deal.url)
    }
    render() {
        const cause = { ...this.state.deal.cause }
        const media = { ...this.state.deal.media }
        const user = { ...this.state.deal.user }
        return (
                <ScrollView style={styles.deal}>
                    <View>
                        <TouchableOpacity onPress={this.props.onBack}>
                            <Text style={styles.backLink}>Back</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: media[0] }} style={styles.image} />
                        <View style={styles.detail}>
                            <View>
                                <Text style={styles.title}>{this.state.deal.title}</Text>
                            </View>
                            <View style={styles.footer}>
                                <View style={styles.info}>
                                    <Text style={styles.price}>{priceDisplay(this.state.deal.price)}</Text>
                                    <Text style={styles.cause}>{cause.name}</Text>
                                </View>
                                {user && (
                                    <View style={styles.user}>
                                        <Image source={{ uri: user.avatar }} style={styles.avatar} />
                                        <Text>{user.name}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={styles.description}>
                                <Text>{this.state.deal.description}</Text>
                            </View>
                        </View>
                    </View>
                    <Button title='Buy this deal!' onPress={this.openDealURL} />
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        marginTop: 10
    },
    detail: {
        borderColor: '#bbb',
        borderWidth: 1
    },
    title: {
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'rgba(237, 149, 45, 0.4)',
        color: '#000'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 15,
    },
    info: {
        borderTopWidth: 0,
    },
    cause: {
        flex: 2,
        textAlign: 'center'
    },
    price: {
        flex: 1,
        textAlign: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
    },
    description: {
        paddingHorizontal: 30,
        marginBottom: 5,

    },
    backLink: {
        marginTop: 10,
        color: '#22f'
    }
})