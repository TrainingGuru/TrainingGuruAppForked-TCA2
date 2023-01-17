
import {Image, StyleSheet, Text} from 'react-native';
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    workoutCardsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    workoutCard: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    workoutCardImage: {
        width: '100%',
        height: '70%',
    },
    workoutCardHeader: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    workoutCardHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    workoutCardBody: {
        width: '100%',
        height: '15%',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    workoutCardName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
    },
    workoutCardTime: {
        fontSize: 18,
        color: '#777',
        marginTop: 5,
    },
    tagContainer: {
        backgroundColor: '#333',
        borderRadius: 20,
        padding: 5,
        marginTop: 10,
    },
    tagText: {
        color: 'red',
        fontSize: 14,
    },
    circlesContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        border: "2px solid white",
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: '#c51d1d',
        fontWeight: 'bold',
        fontSize: "0.6rem",
        textAlign:'center'
    },
    imageOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    overlayText: {
        color: '#d90a0a',
        fontWeight: 'bold',
        fontSize: 18,
    },
    circleInner: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});

const WorkoutCards = ({workout}) => {
    const dayOfWeek = new Date(workout.date).toLocaleString('en-us', { weekday: 'short' });

    return (
        <View style={styles.workoutCard}>
            <Image source={{ uri: workout.image }} style={styles.workoutCardImage} />
            <View style={styles.imageOverlay}>
                <Text style={styles.overlayText}>{dayOfWeek} - {workout.name}</Text>
            </View>
            <View style={styles.circlesContainer}>
                <View style={styles.circle}>
                    <View style={styles.circleInner}>
                        <Text style={styles.circleText}>{workout.time}</Text>
                    </View>
                </View>
                <View style={styles.circle}>
                    {workout.completed ? (
                        <MaterialCommunityIcons name="check" size={20} color="green" />
                    ) : (
                        <View />
                    )}
                </View>
            </View>
        </View>
    );

};

export default WorkoutCards;