import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Movie from './components/movie';
import Button from './components/Button';
import moviesData from './assets/movies.json';

const fateful = require('./assets/Fateful.png');
const twisted = require('./assets/Twisted.png');
const double = require('./assets/Double.png');

export default function App() {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    const handleMoviePress = index => {
        setSelectedButtonIndex(index);
    };

    const imageList = [fateful, twisted, double];
    const currentMovie = moviesData[selectedButtonIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Top 3 <Text style={styles.breen}>Neil Breen</Text> Movies</Text>
            <Movie info={currentMovie} images={imageList} />
            <View style={styles.buttonGroup}>
                <Button label={'#1'} onPress={() => handleMoviePress(0)} isSelected={selectedButtonIndex === 0} />
                <Button label={'#2'} onPress={() => handleMoviePress(1)} isSelected={selectedButtonIndex === 1} />
                <Button label={'#3'} onPress={() => handleMoviePress(2)} isSelected={selectedButtonIndex === 2} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B22222',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 13,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    breen: {
        color: 'gold',
        fontSize: 35
    }
});
