import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

const WorkoutDetails = ({ route }) => {
    const { workout } = route.params;
    if(!workout) return <Text>Loading</Text>
    console.log(workout)
    // rest of your component code

    const [exercises, setExercises] = useState(workout.exercises);

    const handleExerciseToggle = (id) => {
        setExercises(
            exercises.map((exercise) => {
                if (exercise.id === id) {
                    exercise.completed = !exercise.completed;
                }
                return exercise;
            })
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{workout.name}</Text>
            {exercises.map((exercise) => (
                <View style={styles.exerciseRow} key={exercise.id}>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <Text style={styles.reps}>{exercise.reps} reps</Text>
                    <Text style={styles.weight}>
                        Weight: {exercise.weight} lbs (last used on{" "}
                        {exercise.lastUsedDate})
                    </Text>
                    <Checkbox
                        status={exercise.completed ? "checked" : "unchecked"}
                        onPress={() => handleExerciseToggle(exercise.id)}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exerciseRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    exerciseName: {
        fontWeight: "bold",
        flex: 1,
    },
    reps: {
        marginHorizontal: 10,
    },
    weight: {
        marginHorizontal: 10,
        flex: 1,
    },
});

export default WorkoutDetails;