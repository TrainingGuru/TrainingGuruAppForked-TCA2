import {View, Text, TouchableOpacity, StyleSheet, TextInput, Animated} from "react-native";
import {Checkbox} from "react-native-paper";
import {useEffect, useState} from "react";

const WorkoutDetails = ({route}) => {
    const {workout} = route.params;
    if (!workout) return <Text>Loading</Text>
    console.log(workout)
    // rest of your component code

    const [exercises, setExercises] = useState(workout.exercises);
    const [animationValue] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);

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

    const handleExerciseChange = (id, key, value) => {
        setExercises(prevExercises =>
            prevExercises.map(exercise => {
                if (exercise.id === id) {
                    return {
                        ...exercise,
                        [key]: value
                    };
                }
                return exercise;
            })
        );
    };

    const handleWeightChange = (id, value) => {
        if (isNaN(value)) {
            alert("Please enter a valid number for weight.");
            return;
        }
        handleExerciseChange(id, "weight", value);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{opacity: animationValue, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.name}>{workout.name}</Text>
                {exercises.map((exercise) => (
                    <View style={styles.exerciseRow} key={exercise.id}>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                        {exercise.previousWeight ? (  <View style={styles.weightContainer}>
                            {exercise.previousWeight ? (
                                <Text style={styles.weight}>
                                    Weight: last used on{" 22/01/22 "} {exercise.previousWeight} kgs
                                    {exercise.lastUsedDate})
                                </Text>
                            ) : null}
                            <View style={{display: "flex", flexDirection: "row"}}><TextInput
                                placeholder="Enter weight"  style={{width: "50%"}}
                                onChangeText={text => handleWeightChange(exercise.id, text)}
                            />
                            <Text>KG</Text>
                            </View>
                        </View>) : null}
                        <View style={styles.reps}>
                            <Text style={styles.reps}>{exercise.reps} reps</Text>
                            <Checkbox
                                status={exercise.completed ? "checked" : "unchecked"}
                                onPress={() => handleExerciseToggle(exercise.id)}
                            />
                        </View>
                    </View>
                ))}
            </Animated.View>
        </View>

    );
};

const styles = StyleSheet.create({
    exerciseNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    weightContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    container: {
        padding: 20,
        width: "100%"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },
    exerciseRow: {
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 10,
        width: "100%",
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    exerciseName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        color: '#333',
        marginBottom: 10
    },
    reps: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#555',
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    weight: {
        fontSize: 14,
        color: '#555',
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        fontSize: 14,
        color: '#555',
    }
});
export default WorkoutDetails;

