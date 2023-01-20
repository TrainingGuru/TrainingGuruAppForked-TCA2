import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet, View, Text} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieBrokenDown from "../../components/CalorieBrokenDown";
// import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
// import {faShoePrints} from "@fortawesome/free-solid-svg-icons/faShoePrints";
// import {faHeartPulse} from "@fortawesome/free-solid-svg-icons/faHeartPulse";
// import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";
// import {Button, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
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
            backgroundColor: 'red',
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
                gap: "2%",
                steps: {
                    padding: 15,
                    icon1: {
                        width:  30,
                        height: "100%",
                        textAlign: "center"
                    },
                    title: {
                        fontSize: 17,
                        textAlign: "center",
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
                        gap: "2%",
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
                                flex: "1",
                                fontSize: 10,
                                padding: "1%",
                            },
                        }
                    },
                    body: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "stretch",
                        width: "100%",

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

            {/*<View style={styles.clientHome.first}>*/}
            {/*    <CardLayout style={styles.clientHome.first.steps}>*/}
            {/*        <FontAwesomeIcon*/}
            {/*            style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}*/}
            {/*            icon={faShoePrints}/>*/}
            {/*        <Text style={styles.clientHome.first.steps.title}>3400/6000</Text>*/}
            {/*    </CardLayout>*/}
            {/*    <CardLayout style={styles.clientHome.first.steps}>*/}
            {/*        <FontAwesomeIcon*/}
            {/*            style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}*/}
            {/*            icon={faBed}/>*/}
            {/*        <Text style={styles.clientHome.first.steps.title}>Good</Text>*/}
            {/*    </CardLayout>*/}
            {/*    <CardLayout style={styles.clientHome.first.steps}>*/}
            {/*        <FontAwesomeIcon*/}
            {/*            style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}*/}
            {/*            icon={faHeartPulse} color={"red"}/>*/}
            {/*        <Text style={styles.clientHome.first.steps.title}>50 BPM</Text>*/}
            {/*    </CardLayout>*/}
            {/*</View>*/}


            {/*<CardLayout style={styles.clientHome.first.nutrition}>*/}
            {/*    <View style={styles.clientHome.first.nutrition.header}>*/}
            {/*        <h2>*/}
            {/*            Nutrition*/}
            {/*        </h2>*/}
            {/*        <ToggleButtonGroup id={"togglebuttongroup"} style={styles.clientHome.first.nutrition.header.toggleValueButton}*/}
            {/*            value={1}*/}
            {/*            exclusive*/}
            {/*            onChange={undefined}*/}
            {/*            aria-label="Platform">*/}
            {/*            <ToggleButton value="web">(g)</ToggleButton>*/}
            {/*            <ToggleButton value="android">(l)</ToggleButton>*/}
            {/*            <ToggleButton value="ios">(KG)</ToggleButton>*/}
            {/*            <ToggleButton value="ios">(LB)</ToggleButton>*/}
            {/*        </ToggleButtonGroup>*/}
            {/*    </View>*/}
            {/*    <View style={styles.clientHome.first.nutrition.body}>*/}
            {/*        <TextField onChange={(e) => setText(e.currentTarget.value)}  id="outlined-basic" label="Search" variant="outlined"/>*/}
            {/*        <Button  onSubmit={() => add()} variant="contained">Add</Button>*/}
            {/*    </View>*/}
            {/*</CardLayout>*/}
            {/*<CardLayout style={styles.clientHome.first.nutrition}>*/}

            {/*    <View style={styles.clientHome.first.nutrition.topRow}><ToggleButtonGroup*/}
            {/*        style={styles.clientHome.first.nutrition.topRow.weight}>*/}
            {/*        <ToggleButton style={styles.clientHome.first.nutrition.topRow.weight.weightButton} value="grams"*/}
            {/*                      selected={unit === "grams"}*/}
            {/*                      onChange={(event, newValue) => setUnit(newValue)}>grams</ToggleButton>*/}
            {/*        <ToggleButton style={styles.clientHome.first.nutrition.topRow.weight.weightButton} value="kg"*/}
            {/*                      selected={unit === "kg"}*/}
            {/*                      onChange={(event, newValue) => setUnit(newValue)}>kg</ToggleButton>*/}
            {/*        <ToggleButton style={styles.clientHome.first.nutrition.topRow.weight.weightButton} value="litres"*/}
            {/*                      selected={unit === "litres"}*/}
            {/*                      onChange={(event, newValue) => setUnit(newValue)}>litres</ToggleButton>*/}
            {/*    </ToggleButtonGroup>*/}
            {/*        <TextField style={styles.clientHome.first.nutrition.topRow.weightAmmount}*/}
            {/*                   label="Value"*/}
            {/*                   value={value}*/}
            {/*                   onChange={event => setValue(event.target.value)}*/}
            {/*                   borderRadius={"90px!important"}*/}

            {/*        />*/}

            {/*    </View>*/}
            {/*    <TextField*/}
            {/*        label="Food Name"*/}
            {/*        value={foodName}*/}
            {/*        onChange={event => setFoodName(event.target.value)}*/}
            {/*    />*/}
            {/*    <Button variant="contained" onClick={handleSubmit}>*/}
            {/*        <Text>Add Meal</Text>*/}
            {/*    </Button>*/}
            {/*</CardLayout>*/}


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