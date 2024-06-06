import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Movie(props) {
    if (!props.info) {
        return null;
    }

    const imageIndex = props.info.imageIndex < props.images.length ? props.info.imageIndex : 0;
    console.log("Image Source:", props.images[imageIndex]);
    return (
        <>
            <Text style={styles.title}>{props.info.name}</Text>
            <Image source={props.images[imageIndex]} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.release}>Release Year: <Text style={styles.year}>{props.info.year}</Text></Text>
                <Text style={styles.emphasis}>Actors:</Text>
                {props.info.actors.map(actor => (
                    <Text key={actor}>{actor}</Text>
                ))}
                <Text><Text style={styles.emphasis}>Director: </Text>{props.info.director}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    release: {
        fontWeight: 'bold'
    },
    year: {
        color: 'red'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'contain'
    },
    container: {
        marginTop: 20,
    },
    emphasis: {
        fontWeight: 'bold'
    },
});
