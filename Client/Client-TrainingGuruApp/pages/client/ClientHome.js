import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieBrokenDown from "../../components/CalorieBrokenDown";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faShoePrints} from "@fortawesome/free-solid-svg-icons/faShoePrints";
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";
import {Button, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import React, {useCallback, useEffect, useState} from "react";
import {NinjaAPI} from "../../services/nutrition-service";
import {MealWidget} from "../../components/client/MealWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APIClient from "../../services/client-api";
import {getActivityData, getAuthUser} from "../../services/fitbit-service";
import AFitBitPage from "../connect";
import AFitBitPageNoNav from "../connectNoNav";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

export const ClientHome = () => {
    const [unit, setUnit] = useState('grams');
    const [value, setValue] = useState('');
    const [foodName, setFoodName] = useState('');
    const [shoppingList, setShoppingList] = useState([]);
    const [loadingModel, setLoadingModal] = useState(false);
    const [nutritionGoals, setnutritionGoals] = useState();
    const [stepGoals, setStepGoals] = useState();
    const [sleepGoal, setSleepGoals] = useState()
    const [rateGoals, setRateGoal] = useState();
    const [isLoadedFitBit, setisLoadedFitBit] = useState(false);

    let layout = {
        width: Dimensions.get('window').width
    }
    const styles = CreateResponsiveStyle({
        clientHome: {
            display: "flex",
            title: {
                textTransform: "uppercase",
                textAlign: "center",
                padding: 4,
            }
        }
    }, {
        '.clientHome > View': {},
        clientHome: {
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2%",
            gap: "2%",
            title: {
                textAlign: "center",
                padding: 4,
                fontSize: 12,
                fontWeight: "bold"
            },
            first: {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                steps: {
                    width: "30%",
                    paddingHorizontal: 22,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    icon1: {
                        width: 120,
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center",
                        margin: 0
                    },
                    title: {
                        fontSize: 12,
                        textAlign: "center",
                        textOverflow: "nowrap",
                    }
                },
                nutrition: {
                    display: "flex",
                    width: "100%",
                    header: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "1%",
                    },
                    topRow: {
                        gap: "22%",
                        width: '100%',
                        display: "flex",
                        justifyContent: 'space-between',
                        weightAmmount: {
                            textField: {},
                            width: "62%"
                        },
                        weight: {
                            width: "30%",
                            weightButton: {
                                flex: 1,
                                fontSize: 10,
                                padding: "1%",
                            },
                        }
                    },
                    body: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                        addButton: {
                            button: {}
                        }
                    },

                },
                nutritionList: {
                    listOfFood: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                    }

                }
            }
        },
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",

        },
        cardContainer: {
            width: "100%",
        },
        measurementRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
        },
        measurementButton: {
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
            width: "30%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        },
        foodNameContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        foodNameInput: {
            flex: 1,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginRight: 10
        },
        valueInput: {
            width: "20%",
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginRight: 10
        },
        selectedMeasurement: {
            backgroundColor: "#4CAF50",
        },
        submitButton: {
            backgroundColor: "#4CAF50",
            padding: 10,
            borderRadius: 10,
            width: "30%",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        }
    }, layout)




    useFocusEffect(
        React.useCallback(() => {
            const handleAuth = async () => {
                let authToken = await AsyncStorage.getItem("Auth");
              if(authToken){
                  let steps;
                  let sleep;
                  let avgHeartRate;
                  if(avgHeartRate = await AsyncStorage.getItem("avgHeartRate")){
                      setRateGoal(avgHeartRate)
                  }

                  if(sleep = await  AsyncStorage.getItem("sleep")){
                      setSleepGoals(sleep)
                  }
                  if(steps = await AsyncStorage.getItem("steps")){
                      setStepGoals(steps)
                  }




              }


                setisLoadedFitBit(true);


            };

             handleAuth();

            return () => {
                // Clean up the effect.
            };
        }, [])
    );



    useEffect(() => {
        async function getClientID(){
            // alert("here")
            const storedClientID =  await AsyncStorage.getItem('clientId');
            console.log(await  AsyncStorage.getAllKeys())
            // alert(storedAuthToken)
            //
            // alert(storedClientID)
            console.log("fsdsdf" + storedClientID)
            setLoadingModal(true);
            const response = await APIClient.GetNutritionForClient(storedClientID);
console.log(response)
            if(response.value){
                console.log(response.nutrition)
                setnutritionGoals(response.nutrition)
            }
            setLoadingModal(false)
        }


        getClientID();
    }, [])

    const handleUnit = (unit) => {
        setUnit(unit);
    }

    const handleSubmit = async () => {
        const api = new NinjaAPI();

        const nutritionInfo = await api.getNutritionInfo(unit, value, foodName);
        setLoadingModal(true);

        if(!nutritionInfo || nutritionInfo.length < 1){
            alert("Error food not found")
        }

        let temp = shoppingList.concat(nutritionInfo)

        setShoppingList(temp);

        console.log("calories "+ nutritionGoals.CaloriesIntake + nutritionInfo["serving_size_g"])
        console.log("calories "+ nutritionGoals.FatsIntake + nutritionInfo["calories"])

        console.log(       "CaloriesIntake:" +   parseInt(nutritionGoals.CaloriesIntake) + "" + parseInt(nutritionInfo["calories"]) + "" +
            "FatsIntake:" + parseInt(nutritionGoals.FatsIntake) + parseInt(nutritionInfo["fat_total_g"])  + "" +
            "ProteinIntake:" + parseInt(nutritionGoals.ProteinIntake) + parseInt(nutritionInfo["protein_g"])  + "" +
            "carbohydratesIntake" + parseInt(nutritionGoals.CarbohydratesIntake) + parseInt(nutritionInfo["carbohydrates_total_g"]))

        for(const i of nutritionInfo) {
            setnutritionGoals({
                ...nutritionGoals,
                CaloriesIntake: parseInt(nutritionGoals.CaloriesIntake) + parseInt(i["calories"]),
                FatsIntake: parseInt(nutritionGoals.FatsIntake) + parseInt(i["fat_total_g"]),
                ProteinIntake: parseInt(nutritionGoals.ProteinIntake) + parseInt(i["protein_g"]),
                CarbohydratesIntake: parseInt(nutritionGoals.CarbohydratesIntake) + parseInt(i["carbohydrates_total_g"])
            });
        }
        setLoadingModal(false);
    }


    const handleDelete = (index) => {
        const deletedItem = shoppingList[index];

        setShoppingList(shoppingList.filter((item, i) => i !== index));

        setnutritionGoals({
            ...nutritionGoals,
            CaloriesIntake: parseInt(nutritionGoals.CaloriesIntake) - parseInt(deletedItem["calories"]),
            FatsIntake: parseInt(nutritionGoals.FatsIntake) - parseInt(deletedItem["fat_total_g"]),
            ProteinIntake: parseInt(nutritionGoals.ProteinIntake) - parseInt(deletedItem["protein_g"]),
            CarbohydratesIntake: parseInt(nutritionGoals.CarbohydratesIntake) - parseInt(deletedItem["carbohydrates_total_g"])
        });
    }

    if(isLoadedFitBit){
        return <AFitBitPageNoNav  setDone={setisLoadedFitBit} />
    }

    return <Layout loading={loadingModel}>
        <View style={styles.clientHome}>
            <View style={styles.clientHome.title}>
            </View>
            <CardLayout>
                {nutritionGoals ?  <CalorieBrokenDown nutrition={nutritionGoals}/> :
                    <View stye={{paddingHorizontal: 140, fontWeight: "bolder"}}><Text>Coach has not added calorie goals for you yet</Text></View>}
            </CardLayout>

            <View style={styles.clientHome.first}>
                {stepGoals ? <CardLayout style={{...styles.clientHome.first.steps}}>
                    <FontAwesomeIcon size={50}
                                     style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                                     icon={faShoePrints}/>
                    <Text style={styles.clientHome.first.steps.title}>{stepGoals}/16000</Text>
                </CardLayout> : <CardLayout style={styles.clientHome.first.steps}>
                    <Text>Need to connect Fitbit</Text>
                </CardLayout>}
                {sleepGoal ? <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon size={50}
                                     style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                                     icon={faBed}/>
                    <Text style={styles.clientHome.first.steps.title}>Good</Text>
                </CardLayout> : <CardLayout style={styles.clientHome.first.steps}>
                    <Text>Need to connect Fitbit </Text>
                    </CardLayout>}
                {rateGoals ? <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon size={50}
                                     style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                                     icon={faHeartPulse} color={"red"}/>
                    <Text style={styles.clientHome.first.steps.title}>{rateGoals} BPM</Text>
                </CardLayout>: <CardLayout style={styles.clientHome.first.steps}>
                    <Text>Need to connect Fitbit</Text>
                    </CardLayout>}
            </View>

            <CardLayout>
                <View style={styles.measurementRow}>
                    <TouchableOpacity
                        style={[
                            styles.measurementButton,
                            unit === "grams" ? styles.selectedMeasurement : {}
                        ]}
                        onPress={() => handleUnit("grams")}>
                        <Text>grams</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.measurementButton,
                            unit === "lbs" ? styles.selectedMeasurement : {}
                        ]}
                        onPress={() => handleUnit("lbs")}
                    >
                        <Text>lbs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.measurementButton,
                            unit === "oz" ? styles.selectedMeasurement : {}
                        ]}
                        onPress={() => handleUnit("oz")}
                    >
                        <Text>oz</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.foodNameContainer}>
                    <TextInput
                        style={styles.foodNameInput}
                        placeholder="Enter food name"
                        onChangeText={text => setFoodName(text)}
                        value={foodName}
                    />
                    <TextInput
                        style={styles.valueInput}
                        placeholder="Enter value"
                        keyboardType='numeric'
                        onChangeText={text => setValue(text)}
                        value={value}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={{color: "#fff"}}>Add</Text>
                    </TouchableOpacity>
                </View>
            </CardLayout>

            <CardLayout title={"Meal History"} style={styles.clientHome.first.nutritionList}>
                <View style={styles.clientHome.first.nutritionList.listOfFood}>
                    {shoppingList.length > 0 && shoppingList.map((item, index) => {
                        console.log(item)
                        return <View key={index}>
                            <MealWidget
                                item={item}
                                name={item.name}
                                value={item["serving_size_g"]}
                                calories={item["calories"]}
                                fat={item["fat_total_g"]}
                                protein={item["protein_g"]}
                                carbs={item["carbohydrates_total_g"]}
                                maxCarbs={nutritionGoals.TotalCarbohydrates}
                                maxProtein={nutritionGoals.TotalProtein}
                                maxFat={nutritionGoals.TotalFats}
                                maxCalories={nutritionGoals.TotalCalories}
                                index={index}
                                 remove={handleDelete}
                                index={index}
                            />
                        </View>
                    })}
                </View>
            </CardLayout>

        </View>
    </Layout>


}

export default ClientHome;