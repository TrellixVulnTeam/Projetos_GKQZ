import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import RandomNumber from './RandomNumber'
import shuffle from 'lodash.shuffle'

export default class Game extends Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
        initialSeconds: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired,
    }
    state = {
        selectedIds: [],
        remainingSeconds: this.props.initialSeconds,
    }
    gameStatus = 'PLAYING'
    //define the quantity of numbers for the sum
    randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(() => 1 + Math.floor(10 * Math.random()))
    target = this.randomNumbers.slice(0, this.props.randomNumberCount - 2).reduce((acc, curr) => acc + curr, 0)
    shuffledRandomNumbers = shuffle(this.randomNumbers)

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return { remainingSeconds: prevState.remainingSeconds - 1 }
            }, () => {
                if (this.state.remainingSeconds === 0) {
                    clearInterval(this.intervalId)
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    isNumberSelected = (numberIndex) => {
        return this.state.selectedIds.indexOf(numberIndex) >= 0
    }

    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedIds: [...prevState.selectedIds, numberIndex]
        }))
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.selectedIds !== this.state.selectedIds ||
            nextState.remainingSeconds === 0
        ) {
            this.gameStatus = this.calcGameStatus(nextState)
            if (this.gameStatus !== 'PLAYING') {
                clearInterval(this.intervalId)
            }
        }
    }

    //game status: playing, won, lost
    calcGameStatus = (nextState) => {
        const sumSelected = nextState.selectedIds.reduce((acc, curr) => {
            return acc + this.shuffledRandomNumbers[curr]
        }, 0)
        if (nextState.remainingSeconds === 0) {
            return 'LOST'
        }
        if (sumSelected < this.target) {
            return 'PLAYING'
        }
        if (sumSelected === this.target) {
            return 'WON'
        }
        if (sumSelected > this.target) {
            return 'LOST'
        }
    }

    render() {
        const gStatus = this.gameStatus
        return (
            <View style={styles.container}>
                {this.gameStatus === 'PLAYING' && <Text style={styles.timer}>{`Your time: ${this.state.remainingSeconds}s`}</Text>}
                <Text style={[styles.target, styles[`STATUS_${gStatus}`]]}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {this.shuffledRandomNumbers.map((randomNumber, index) =>
                        <RandomNumber key={index} id={index} number={randomNumber} isDisabled={this.isNumberSelected(index) || gStatus !== 'PLAYING'} onPress={this.selectNumber} />)
                    }
                </View>
                {this.gameStatus === 'WON' && <Text style={[styles.target, styles.STATUS_WON]}>You won!!</Text>}
                {this.gameStatus === 'LOST' && <Text style={[styles.target, styles.STATUS_LOST]}>Try again :/</Text>}
                {this.gameStatus !== 'PLAYING' && <Button title='Play Again' onPress={this.props.onPlayAgain} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex: 1,
        paddingTop: 30
    },
    timer: {
        fontSize: 20,
        marginHorizontal: 50,
        textAlign: 'center',
        marginBottom: 20
    },
    target: {
        fontSize: 40,
        marginHorizontal: 50,
        textAlign: 'center',
        marginBottom: 50
    },
    randomContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'space-around'
    },
    STATUS_PLAYING: {
        color: '#fff',
        backgroundColor: 'gray',
    },
    STATUS_WON: {
        color: '#070',
        backgroundColor: '#0f0',
    },
    STATUS_LOST: {
        color: '#f00',
        backgroundColor: '#F88',
    },
})
