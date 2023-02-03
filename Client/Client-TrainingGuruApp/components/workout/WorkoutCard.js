
import {Image, StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: "100%"
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
    width: "100%",
        height: "60%"
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
        fontSize: 12,
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
        fontSize: 10,
        textAlign:'center'
    },
    imageOverlay: {
        display: "flex",
        height: "40%",
        width:"100%",
        justifyContent: "center",
        textAlign: "center"
    },
    overlayText: {
        color: '#1e1c1c',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: "auto"
    },
    circleInner: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    workoutCardImageHolder: {
        height: "80%",
        width: "100%",
        backgroundColor: "red"
    }
});

const WorkoutCards = ({workout}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(workout.Date);
    const dayOfWeek = daysOfWeek[date.getDay()];
const workoutImages = [
    "https://images.unsplash.com/photo-1591227174835-d3705c881c90?ixlib=rb-4.0.3&dpr=1&auto=format&fit=crop&w=480&h=80&q=60",
        "https://images.unsplash.com/photo-1571388183795-1faa7cf91154?ixlib=rb-4.0.3&dpr=1&auto=format&fit=crop&w=480&h=80&q=60",
        "https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-4.0.3&dpr=1&auto=format&fit=crop&w=480&h=80&q=60",
        'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1553531889-65d9c41c2609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1553531580-a000ac8df244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ];
    console.log("inside")
    console.log(workout)
    let randomIndex = Math.floor(Math.random() * workoutImages.length);
    const randomImm = workoutImages[randomIndex];
    return (
        <View style={styles.workoutCard} >
                <Image
                    source={{ uri: randomImm }}
                    style={styles.workoutCardImage}
                />
            <View style={styles.imageOverlay}>
                <Text style={styles.overlayText}>{dayOfWeek.toUpperCase()} - {workout.TrainerWorkout.WorkoutName.toUpperCase()}</Text>
            </View>
            <View style={styles.circlesContainer}>
                <View style={styles.circle}>
                    <View style={styles.circleInner}>
                        <Text style={styles.circleText}>{"30 minutes"}</Text>
                    </View>
                </View>
                <View style={styles.circle}>
                    {workout.Completed ? (
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