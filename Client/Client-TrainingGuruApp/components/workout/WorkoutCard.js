
import {Image, StyleSheet, Text} from 'react-native';
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

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
        width: '95%',
        height: 200,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        display: 'flex',
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
        color: '#fff',
        fontSize: 14,
    },
});

const WorkoutCards = ({workout}) => {
                return (
                    <View key={workout.id} style={styles.workoutCard}>
                        <Image source={{ uri: workout.image }} style={styles.workoutCardImage} />
                        <View style={styles.workoutCardHeader}>
                            <Text style={styles.workoutCardHeaderText}>{workout.date}</Text>
                        </View>
                        <View style={styles.workoutCardBody}>
                            <Text style={styles.workoutCardName}>{workout.name}</Text>
                            <Text style={styles.workoutCardTime}>Expected Time: {workout.expectedTime}</Text>
                            <View style={styles.tagContainer}>
                                <Text style={styles.tagText}>{workout.category}</Text>
                            </View>
                        </View>
                    </View>
                );

};

export default WorkoutCards;