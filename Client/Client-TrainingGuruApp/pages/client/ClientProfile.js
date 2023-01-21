import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Animated
} from 'react-native';

const ClientProfile = () => {
    const [userImage, setUserImage] = useState('https://example.com/user-image.jpg');
    const [goals, setGoals] = useState(['Lift weights', 'Gain 10kg of muscle']);

    const handleUpdateImage = () => {
        // code to update user image
    }

    const handleGoalAdd = () => {
        if (goals.length < 4) {
            setGoals([...goals, 'New Goal']);
        }
    }

    const handleGoalRemove = () => {
        if (goals.length > 0) {
            setGoals(goals.slice(0, -1));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.leftCard}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: userImage }}
                            style={styles.userImage}
                        />
                    </View>
                    <TouchableOpacity onPress={handleUpdateImage}>
                        <Text style={styles.updateButton}>Update Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightCard}>
                    <View style={styles.fitbitContainer}>
                        <View style={styles.fitbitIndicator}>
                            <Text style={styles.fitbitText}>Fitbit Connected</Text>
                        </View>
                        <View style={styles.coachContainer}>
                            <Image
                                source={{ uri: 'https://example.com/coach-image.jpg' }}
                                style={styles.coachImage}
                            />
                            <Text style={styles.coachName}>Coach Name</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.goalContainer}>
                <Text style={styles.goalTitle}>Goals</Text>
                <ScrollView>
                    {goals.map((goal, index) => (
                        <View key={index} style={styles.goalCard}>
                            <Text style={styles.goalText}>{goal}</Text>
                            <View style={styles.goalActions}>
                                <TouchableOpacity onPress={handleGoalRemove}>
                                    <Text style={styles.goalButton}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleGoalAdd}>
                                    <Text style={styles.goalButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
    },
    goalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    goalButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalCard: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    topCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    userCard: {
        width: '45%',
        height: '60%',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userImage: {
        width: '60%',
        height: '60%',
        borderRadius: 100,
        overflow: 'hidden'
    },
    updateImageButton: {
        width: '80%',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#4169E1',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateImageButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    fitbitCard: {
        width: '45%',
        height: '60%',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fitbitConnectedContainer: {
        width: '80%',
        height: '40%',
        borderRadius: 10,
        backgroundColor: '#228B22',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fitbitConnectedText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    coachContainer: {
        width: '80%',
        height: '40%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    coachImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight: 10
    },
    coachName: {
        fontWeight: 'bold'
    },
    goalsContainer: {
        marginVertical: 20,
        width: '100%',
        height: '30%',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        padding: 20
    },
    goalsTitle: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    goalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    goalText: {
        marginRight: 10
    },
    addGoalButton: {
        width: 30,
        height: 30,
        backgroundColor: '#228B22',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addGoalButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
        removeGoalButton: {
            width: 30,
            height: 30,
            backgroundColor: '#ff0000',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        removeGoalButtonText: {
            color: '#fff',
            fontWeight: 'bold'
        }
    });

export default ClientProfile;