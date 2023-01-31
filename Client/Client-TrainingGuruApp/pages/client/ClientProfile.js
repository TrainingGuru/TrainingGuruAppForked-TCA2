import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView, FlatList} from 'react-native';
import CardLayout from "../../components/reusable/CardLayout";
import Layout from "../../components/structure/Layout";
import {ConnectFitbitModel} from "../../components/ConnectFitbitModel";

function ClientProfile() {
    const [userName, setUserName] = useState("Josh Mitvh");
    const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    const [coachName, setCoachName] = useState("Frsny Pis");
    const [coachImage, setCoachImage] = useState("https://images.unsplash.com/photo-1556623695-bc86a6edb75a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHVkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    const [goals, setGoals] = useState([]);
    const [fitbitModelOpen, setFitbitModelOpen] = useState(false)
    const [fitbitConnected, setFitbitConnected] = useState(false);

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

    const handleConnectFitbit = () => {
        setFitbitModelOpen(true)
        // setFitbitConnected(!fitbitConnected);
    }

    const [loading, setLoading] = useState();

    const connectFunction = () => {
        setLoading(true);
    }

    return (
        <Layout loading={loading}>
            <View>
            <ConnectFitbitModel open={fitbitModelOpen} setOpen={setFitbitModelOpen} connectFunction={connectFunction}/>
            <View style={styles.topRowContainer}>
                <CardLayout  style={{...styles.cardContainer, width: "40%"}}>
                    <TouchableOpacity onPress={() => {
                    }}>

                        <Image source={{uri: userImage}} style={styles.image}/>

                    </TouchableOpacity>
                    <Text style={styles.nameText}>{userName}</Text>
                    <TouchableOpacity style={styles.cameraButton} onPress={() => {
                    }}>
                        <Text>Camera</Text>
                    </TouchableOpacity>
                </CardLayout>
                <CardLayout style={{...styles.cardContainer, width: "40%"}}>

                    <Image source={{uri: coachImage}} style={styles.image}/>
                    <Text style={styles.nameText}>{coachName}</Text>

                </CardLayout>
            </View>
            <CardLayout>
                <View style={styles.goalHeaderContainer}>
                    <Text style={styles.goalHeaderText}>User Goals</Text>
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
                                onFocus={() => {
                                }}
                                onBlur={() => {
                                }}
                            />
                            <TouchableOpacity style={styles.deleteGoalButton} onPress={() => handleDeleteGoal(index)}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </CardLayout>
            <CardLayout style={styles.cardContainer}>
                <View style={styles.fitbitContainer}>
                    <Text style={styles.fitbitText}>
                        {fitbitConnected ? "Fitbit Connected" : "Fitbit Disconnected"}
                    </Text>
                    <TouchableOpacity style={styles.fitbitButton} onPress={handleConnectFitbit}>
                        <Text>{fitbitConnected ? "Disconnect" : "Connect"}</Text>
                    </TouchableOpacity>
                </View>
            </CardLayout>
        </View></Layout>
    );
}

const styles = {
    topRowContainer: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between"
    },
    cardContainer: {

        display:"flex",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 60,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 50
    },
    nameText: {
        textAlign: "center",
        fontWeight: "bold",
    },
    cameraButton: {
        position: "absolute",
        bottom: 0,
        right: 0,
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
        alignItems: "center",
        marginVertical: 5,
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
    fitbitContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    fitbitText: {
        fontWeight: "bold",
        fontSize: 20,
    },
    fitbitButton: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
}

export default ClientProfile;