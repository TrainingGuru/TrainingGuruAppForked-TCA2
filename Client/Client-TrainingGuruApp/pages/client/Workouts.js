import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const Workouts = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            padding: 20,
        },
        workoutCardsContainer: {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        workoutCard: {
            width: '95%',
            height: 200,
            borderRadius: 10,
            backgroundColor: 'white',
            marginVertical: 10,
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
        },
        workoutCardImage: {
            width: '100%',
            height: '70%',
        },
        workoutCardHeader: {
            width: '100%',
            height: '15%',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
        },
        workoutCardHeaderText: {
            fontWeight: 'bold',
        },
        workoutCardBody: {
            width: '100%',
            height: '15%',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    });

    const [workouts, setWorkouts] = useState([
        {
            id: 1,
            date: 'Jan 1, 2021',
            image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 2,
            date: 'Jan 2, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: false
        },
        {
            id: 3,
            date: 'Jan 3, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 1,
            date: 'Jan 1, 2021',
            image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 2,
            date: 'Jan 2, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: false
        },
        {
            id: 3,
            date: 'Jan 3, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 1,
            date: 'Jan 1, 2021',
            image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 2,
            date: 'Jan 2, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: false
        },
        {
            id: 3,
            date: 'Jan 3, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 1,
            date: 'Jan 1, 2021',
            image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        {
            id: 2,
            date: 'Jan 2, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: false
        },
        {
            id: 3,
            date: 'Jan 3, 2021',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            completed: true
        },
        // ... more workouts
    ]);

    const sortedWorkouts = workouts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.workoutCardsContainer}>
                    {sortedWorkouts.map(workout => {
                        return (
                            <View key={workout.id} style={styles.workoutCard}>
                                <Image source={{ uri: workout.image }} style={styles.workoutCardImage} />
                                <View style={styles.workoutCardHeader}>
                                    <Text style={styles.workoutCardHeaderText}>{workout.date}</Text>
                                    {workout.completed && <Text>✔️</Text>}
                                </View>
                                <View style={styles.workoutCardBody}>
                                    <Text>{workout.name}</Text>
                                    <Text>Expected Time: {workout.expectedTime}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default Workouts;