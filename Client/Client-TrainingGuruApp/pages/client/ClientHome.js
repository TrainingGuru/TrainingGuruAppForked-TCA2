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
import MealWidget from "../../components/client/MealWidget";
import {useState} from "react";
import {NinjaAPI} from "../../services/nutrition-service";

export const ClientHome = () => {


    const [unit, setUnit] = useState('grams');
    const [value, setValue] = useState('');
    const [foodName, setFoodName] = useState('');
    const [shoppingList, setShoppingList] = useState([]);

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
        '.clientHome > View': {
        },
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
                    justifyContent:"center",
                    alignItems: "center",
                    display: "flex",
                    icon1: {
                        width:  120,
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

                            textField: {

                            },
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
                        addButton:{
                            button:{

                            }
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

    }, layout)

    const handleUnit = (unit) => {
        setUnit(unit);
    }


    const handleSubmit = async () => {
        const api = new NinjaAPI();
        const nutritionInfo = await api.getNutritionInfo(unit, value, foodName);

        let temp = shoppingList.concat(nutritionInfo)

        setShoppingList(temp);
    }

    return <Layout>
        <View style={styles.clientHome}>
            <View style={styles.clientHome.title}>
            </View>
            <CardLayout>
                <CalorieBrokenDown/>
            </CardLayout>

            <View style={styles.clientHome.first}>
                <CardLayout style={{...styles.clientHome.first.steps}}>
                    <FontAwesomeIcon size={50}
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faShoePrints}/>
                    <Text style={styles.clientHome.first.steps.title}>13400/16000</Text>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon size={50}
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faBed}/>
                    <Text style={styles.clientHome.first.steps.title}>Good</Text>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon size={50}
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faHeartPulse} color={"red"}/>
                    <Text style={styles.clientHome.first.steps.title}>50 BPM</Text>
                </CardLayout>
            </View>


            <CardLayout style={styles.clientHome.first.nutrition}>

                {/*<View style={styles.clientHome.first.nutrition.topRow}><ToggleButtonGroup*/}
                <View style={styles.clientHome.first.nutrition.topRow.weight}>
                    <TouchableOpacity style={styles.clientHome.first.nutrition.topRow.weight.weightButton} onPress={() => handleUnit('grams')}>
                        <Text>grams</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clientHome.first.nutrition.topRow.weight.weightButton} onPress={() => handleUnit('lbs')}>
                        <Text>lbs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clientHome.first.nutrition.topRow.weight.weightButton} onPress={() => handleUnit('oz')}>
                        <Text>oz</Text>
                    </TouchableOpacity>
                </View>

        <View style={styles.clientHome.first.nutrition.body}>
            <TextInput
                placeholder="Enter food name"
                onChangeText={text => setFoodName(text)}
                value={foodName}
            />
            <TouchableOpacity  onPress={() => handleSubmit()}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
                <TextInput
                    label="Food Name"
                    value={foodName}
                    onChange={event => setFoodName(event.target.value)}
                />
                {/*<Button variant="contained" onClick={handleSubmit}>*/}
                {/*    <Text>Add Meal</Text>*/}
                {/*</Button>*/}
            </CardLayout>


            {/*<CardLayout title={"Meal History"} style={styles.clientHome.first.nutritionList}>*/}
            {/*    <View style={styles.clientHome.first.nutritionList.listOfFood}>*/}
            {/*        {shoppingList.length > 0 && shoppingList.map((item) => {*/}
            {/*            return <>*/}
            {/*                <MealWidget*/}
            {/*                    item={item}*/}
            {/*                    name={item.name}*/}
            {/*                    value={item.value}*/}
            {/*                    calories={item["calories"]}*/}
            {/*                    fat={item["fat_total_g"]}*/}
            {/*                    protein={item["protein_g"]}*/}
            {/*                    carbs={item["carbohydrates_total_g"]}*/}
            {/*                /></>*/}
            {/*        })*/}
            {/*        })*/}
            {/*    </View>*/}
            {/*</CardLayout>*/}

        </View>
    </Layout>


}

export default ClientHome;