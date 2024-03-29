import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView, FlatList} from 'react-native';
import CardLayout from "../../components/reusable/CardLayout";
import Layout from "../../components/structure/Layout";
import {ConnectFitbitModel} from "../../components/ConnectFitbitModel";
import {Fitbit} from "../../services/fitbit-service";
import {NinjaAPI} from "../../services/nutrition-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APIClient from "../../services/client-api";
import {useNavigation} from "@react-navigation/native";


function ClientProfile() {
    const [id1, setId1] = useState("");
    const [text, setText] = useState("");
    const [userName, setUserName] = useState("Josh Mitvh");
    const [userImage, setUserImage] = useState("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    const [coachName, setCoachName] = useState("Frsny Pis");
    const [coachImage, setCoachImage] = useState("https://images.unsplash.com/photo-1556623695-bc86a6edb75a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHVkZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
    const [goals, setGoals] = useState([]);
    const [fitbitModelOpen, setFitbitModelOpen] = useState(false)
    const [fitbitConnected, setFitbitConnected] = useState(false);
    const [loadingModel, setLoadingModal] = useState(false);
    const [clientId, SetClientId] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        // async function getClientID(){


        //     alert("here2")
        //     const storedClientID =  await AsyncStorage.getItem('clientId');
        //     SetClientId(storedClientID);
        //     alert(storedClientID)
        //     setLoadingModal(true);
        //     const response = await APIClient.GetAllGoalsForClient(storedClientID)
        //     console.log(response)
        //     if(response.value){
        //         setGoals(response.goals)
        //     }
        //     setLoadingModal(false)
        //
        //     let bit = new Fitbit();
        //     const response2 = await  bit.getUserProfile();
        //     console.log("bbbbbbsfdsfd")
        //     console.log(response2)
        //
        // }
        //
        //
        // getClientID();
    }, [])

    const handleDeleteGoal = async (goalID) => {
        alert(goalID)
        const goalIndex = goals.findIndex(goal => goal.GoalID === goalID);
        if (goalIndex !== -1) {
            setGoals(goals.filter((goal, i) => i !== goalIndex));
            await APIClient.DeleteClientGoal(clientId, goalID)
        }
    }

    const handleEditGoal = (id, text1) => {
        console.log("textddasd " + text1 + "id sfdsffsd" + id)

        setGoals(goals.map((goal, i) => {
            if (goal.GoalID === id) {
                return { ...goal, Goal: text1 };
            }
            return goal;
        }));
    }

    async function handleEditUpdateGoal(id, goal, goalid) {
        alert("id" + id + "goal" + goal)
        console.log("id" + id + "goal" + goal)
        await APIClient.UpdateGoal(goalid,id, goal)
    }

    const updateGoals = () => {
        console.log(goals)
    }

    const handleConnectFitbit = () => {

        navigation.navigate("ABitPage")
        // setFitbitConnected(!fitbitConnected);
    }

    const handleAddGoal = async () => {
        if (goals.length < 4) {

            setLoadingModal(true)
            const response = await APIClient.CreateNewGoalForClient(clientId);

            if(response.value){
                setGoals(prev => [...prev, response.goal])
            }
            setLoadingModal(false);
        }

    }


    const connectFunction = async () => {
        // setLoading(true);
        const api = new Fitbit();
        console.log(await api.refreshToken())

    }




    return (
        <Layout loading={loadingModel}>
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
                                value={item.Goal}
                                onChangeText={text1 => {
                                    let a = item.GoalID;
                                    // setText(text1);
                                    // setId1(a)
                                    handleEditGoal(a, text1)
                                }}
                                onFocus={() => {
                                }}
                                onEndEditing={() => {

                                    alert(item.ClientID + "" + item.Goal + "" + item.GoalID)
                                    handleEditUpdateGoal(item.ClientID , item.Goal , item.GoalID )
                                }}
                            />
                            <TouchableOpacity style={styles.deleteGoalButton} onPress={() => handleDeleteGoal(item.GoalID)}>
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