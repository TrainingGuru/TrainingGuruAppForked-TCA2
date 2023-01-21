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
 