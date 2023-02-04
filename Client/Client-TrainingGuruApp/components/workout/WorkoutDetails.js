import {View, Text, TouchableOpacity, StyleSheet, TextInput, Animated, Modal, Alert, ScrollView} from "react-native";
import {Checkbox} from "react-native-paper";
import {useNavigation} from '@react-navigation/native';

import {useEffect, useState} from "react";
import APIClient from "../../services/client-api";

const WorkoutDetails = ({route}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const {workout} = route.params;
    const navigation = useNavigation();
    if (!workout) return <Text>Loading</Text>
    // console.log(workout)
    // // rest of your component code

    const [workoutCompletedData, setworkoutCompletedData] = useState(null)
    const [w, WSet] = useState(undefined);



    const [exercises, setExercises] = useState(workout.map((workout, index) => ({
        id: index + 1,
        name: workout.Exercises[0].Name,
        reps: workout.Exercises[0].Reps,
        previousWeight: workout.Exercises[0].Type === "Weights" ? 10: null,
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


    const submitNotes = async () => {
        // Send notes to coach
        // navigate to workout overview page

        let workoutString = "User Notes: " + notes + "\n\nWorkout: " + workout.WorkoutName + "\n\n";

        exercises.forEach((exercise) => {
            workoutString += "Exercise: " + exercise.name + "\n";
            workoutString += "Completed: " + (exercise.completed ? "Yes" : "No") + "\n";
            workoutString += "Weight Used: " + (exercise.weight ? exercise.weight + "" : "N/A") + "\n\n";
        });
alert("workoutId " + workout.Id)
        const data = await APIClient.CompleteWorkout(workout.Id, workoutString);

        if(data.value){
            alert("Workout Updated Successfully")
            navigation.navigate('ClientHome')
        }
        else {
            alert("Error Could Not Get Workout Completed")
        }
        console.log({i : workoutString, pass: true})
        console.log(workoutString)
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

    useEffect(() => {
        if (workout.notes.length >= 1) {
            const notesArray1 = workout.notes.split("\n");
            for (let i = 0; i < notesArray1.length; i++) {
                if (notesArray1[i].startsWith("User Notes:")) {
                    WSet(notesArray1[i].split(":")[1].trim());
                    break;
                }
            }


            let updatedExercises = [...exercises];
            const notesArray = workout.notes.split("\n");

            for (let i = 0; i < notesArray.length; i++) {
                if (notesArray[i].includes("Exercise")) {
                    const exerciseName = notesArray[i].split(":")[1].trim();
                    const completed = notesArray[i + 1].includes("Yes");
                    const weight = notesArray[i + 2].split(":")[1].trim();

                    const exerciseIndex = exercises.findIndex(
                        exercise => exercise.name === exerciseName
                    );

                    if (exerciseIndex >= 0) {
                        updatedExercises[exerciseIndex].workoutAlreadyCompleted = completed;
                        updatedExercises[exerciseIndex].WeightForWorkoutUsed = weight;
                        alert(weight)
                    }
                }
            }
            setExercises(updatedExercises);
        }
    }, [])

    return (
        <ScrollView style={styles.container}>
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

            <Animated.View style={{opacity: animationValue}}>
                <Text style={styles.name}>{workout.WorkoutName}</Text>
                {w &&  <View style={styles.container22}>
                    <Text style={styles.title}>{"Workout Notes"}</Text>
                    <View style={[styles.notesContainer, {
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        borderRadius: 20,
                        padding: 20,
                        elevation: 5,
                        shadowColor: 'gray',
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        shadowOffset: {width: 0, height: 2},
                        alignItems: 'center'
                    }]}>
                        {w && <Text style={[styles.notes, {textAlign: 'center'}]}>{w.toString()}</Text>}
                    </View>
                </View>}
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
                                placeholder="Enter weight"  style={{width: "50%", fontSize: 15}} value={exercise.hasOwnProperty("WeightForWorkoutUsed")   && exercise.WeightForWorkoutUsed.toString()}
                                onChangeText={text => handleWeightChange(exercise.id, text)}   editable={workout.notes.length < 1}
                            />
                                <Text  style={{ marginTop: 0, marginBottom: 0, fontSize: 15}}>KG</Text>
                            </View>
                        </View>) : null}
                        <View style={styles.reps}>
                            <Text style={styles.reps}>{exercise.reps} reps</Text>
                            <Checkbox
                                status={exercise.completed || exercise.workoutAlreadyCompleted ? "checked" : "unchecked"}
                                disabled={exercise.hasOwnProperty("workoutAlreadyCompleted") ? true : exercise.previousWeight ? !exercise.weightEntered : false}
                                onPress={() => handleExerciseToggle(exercise.id)}
                            />
                        </View>
                    </View>
                ))}

                {!w && <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>}

            </Animated.View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container22: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notesContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
    },
    notes: {
        fontSize: 16,
    },
    exerciseNameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    weightContainer: {
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    container: {
        paddingHorizontal: 20,
        width: "100%",
        height: "100%",
        marginVertical: 15
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'center',
        color: '#333'
    },
    exerciseRow: {
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 10,
        width: "100%",
        backgroundColor: '#fff',
        padding: 1,
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

