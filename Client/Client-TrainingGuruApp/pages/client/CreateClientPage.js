import Animated, { Easing } from 'react-native-reanimated';
import { useState, useRef } from 'react';

const CreateClientPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [coachCode, setCoachCode] = useState('');
    const [goals, setGoals] = useState([]);
    const [isGoalsVisible, setIsGoalsVisible] = useState(false);

    const slideAnim = useRef(new Animated.Value(0)).current;

    const handleAddGoal = () => {
        if (goals.length < 4) {
            setGoals([...goals, ""]);
        }
    }

    const handleDeleteGoal = (index) => {
        if (goals.length > 1) {
            setGoals(goals.filter((goal, i) => i !== index));
        }
    }

    const handleEditGoal = (text, index) => {
        setGoals(goals.map((goal, i) => {
            if (i === index) {
                return text;
            }
            return goal;
        }));
    }

    const handleCreateClient = () => {
        // validate form and create client account
    }

    const handleToggleGoals = () => {
        if (isGoalsVisible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 250,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 250,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
        setIsGoalsVisible(!isGoalsVisible);
    }

    const slideY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 0],
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            width: '80%',
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            marginVertical: 10,
            paddingHorizontal: 10,
        },
        goalHeaderContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        goalHeaderText: {
            textAlign: "center",
            fontWeight: "bold",
        },
        addGoalButton: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "lightblue",
            justifyContent: "center",
            alignItems: "center",
        },
        goalContainer: {
            flexDirection: "row",
        },
        goalText: {
            flex: 1,
            padding: 5,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 5,
        },
        deleteGoalButton: {
            marginLeft: 10,
        },
        createClientButton: {
            width: '80%',
            backgroundColor: '#4f83cc',
            paddingVertical: 10,
            alignItems: 'center',
            marginVertical: 10,
        },
        createClientButtonText: {
            color: 'white',
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={setFirstName}
                value={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={setLastName}
                value={lastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Coach Code"
                onChangeText={setCoachCode}
                value={coachCode}
            />
            <View style={styles.goalHeaderContainer}>
                <Text style={styles.goalHeaderText}>Goals</Text>
                <TouchableOpacity style={styles.addGoalButton} onPress={handleAddGoal}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={goals}
                renderItem={({item, index}) => (
                    <View style={styles.goalContainer}>
                        <TextInput
                            style={styles.goalText}
                            value={item}
                            onChangeText={text => handleEditGoal(text, index)}
                        />
                        <TouchableOpacity style={styles.deleteGoalButton} onPress={() => handleDeleteGoal(index)}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.createClientButton} onPress={handleCreateClient}>
                <Text style={styles.createClientButtonText}>Create Client</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreateClientPage();