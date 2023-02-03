import {View, Text, TouchableOpacity, StyleSheet, TextInput, Animated,Modal, Alert} from "react-native";
import {Checkbox} from "react-native-paper";
import {useNavigation} from '@react-navigation/native';

import {useEffect, useState} from "react";

const WorkoutDetails = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {workout} = route.params;
    const navigation = useNavigation();
    if (!workout) return <Text>Loading</Text>
    // console.log(workout)
    // // rest of your component code

    const [exercises, setExercises] = useState(workout.map((workout, index) => ({
        id: index + 1,
        name: workout.Exercises[0].Name,
        reps: workout.Exercises[0].Reps,
        previousWeight: null,
        previousDate: null,
        completed: false,
    })).map(exercise => ({...exercise, weightEntered: false, requiresWeight: exercise.weight ? true : false})));    const [animationValue] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);


    const handleSubmit = () => {
    const  completed = exercises.every(exercise => exercise.completed === true);

        if (completed) {
            Alert.alert(
                "Good Job!",
                "Record your notes",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => setModalVisible(true) }
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                "Not completed",
                "You have not completed all exercises, submit any way and record your notes to help the coach understand why you could not finish the workout.",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () =>  setModalVisible(true) }
                ],
                { cancelable: false }
            );
        }
    }

    const [completed, setCompleted] = useState(false);
    const [notes, setNotes] = useState("");


    const submitNotes = () => {
        // Send notes to coach
        // navigate to workout overview page
        navigation.navigate('Workouts')
    }




    const handleExerciseToggle = (id) => {
        setExercises(
            exercises.map((exercise) => {
                if (exercise.id === id) {
                    if (!exercise.requiresWeight || (exercise.requiresWeight && exercise.weightEntered)) {
                        return {
                            ...exercise,
                            completed: !exercise.completed
                        };
                    } else {
                        alert("Please enter weight first!");
                    }
                }
                return exercise;
            })
        );
        console.log(exercises)

    };

    const handleWeightChange = (id, value) => {
        let weightEntered = true;
        if (isNaN(value) || value === "") {
            alert("Please enter a valid number for weight.");
            weightEntered = false;
        }
        setExercises(prevExercises =>
            prevExercises.map(exercise => {
                if (exercise.id === id) {
                    return {
                        ...exercise,
                        weightEntered,
                        weight: value,
                        completed: weightEntered ? exercise.completed : false
                    };
                }
                return exercise;
            })
        );
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.modalTitle}>Notes for your Coach</Text>
                        <TextInput
                            placeholder="Enter your notes here"
                            style={styles.notesInput}
                            multiline={true}
                            onChangeText={text => setNotes(text)}
                            value={notes}
                        />
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={styles.modalCancelButton}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalSubmitButton}
                                onPress={submitNotes}
                            >
                                <Text style={styles.modalButtonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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
                            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}><TextInput
                                placeholder="Enter weight"      style={{width: "50%", fontSize: 15}}

                                onChangeText={text => handleWeightChange(exercise.id, text)}
                            />
                                <Text  style={{ marginTop: 0, marginBottom: 0, fontSize: 15}}>KG</Text>
                            </View>
                        </View>) : null}
                        <View style={styles.reps}>
                            <Text style={styles.reps}>{exercise.reps} reps</Text>
                            <Checkbox
                                status={exercise.completed ? "checked" : "unchecked"}
                                disabled={exercise.previousWeight ? !exercise.weightEntered : false}
                                onPress={() => handleExerciseToggle(exercise.id)}
                            />
                        </View>
                    </View>
                ))}

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>

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
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalInnerContainer: {
        width: "80%",
        height: "40%",
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20
    },
    notesInput: {
        width: "100%",
        height: "60%",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 20,
        textAlignVertical: "top"
    },
    modalButtonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalCancelButton: {
        backgroundColor: "#ccc",
        padding: 10,
        width: "40%"
    },
    modalSubmitButton: {
        backgroundColor: "#33cc33",
        padding: 10,
        width: "40%"
    },
    modalButtonText: {
        textAlign: "center",
        color: "#fff"
    },
    weight: {
        fontSize: 14,
        color: '#555',
        width: "40%"
    },

    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        fontSize: 14,
        color: '#555',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 15,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText:{
        color: 'white',
    },
});
export default WorkoutDetails;

