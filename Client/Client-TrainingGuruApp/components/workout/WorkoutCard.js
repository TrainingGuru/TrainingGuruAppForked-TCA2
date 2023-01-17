import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const WorkoutCard = ({ workout, onPress }) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 300,
            backgroundColor: '#E9ECEF',
            borderRadius: 10,
            padding: 20,
            overflow: 'hidden',
            marginVertical: 10,
        },
        imageContainer: {
            width: '100%',
            height: '60%',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: '100%',
        },
        titleContainer: {
            width: '100%',
            height: '20%',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
        },
        timeContainer: {
            width: '100%',
            height: '20%',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        time: {
            fontSize: 16,
            textAlign: 'center',
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: workout.image }} style={styles.image} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{workout.name}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>{workout.time}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default WorkoutCard;