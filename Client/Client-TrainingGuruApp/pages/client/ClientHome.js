import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet} from "react-native";
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

export const clientHome = () => {


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
        clientHome: {
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
            fontFamily: "Play",
            marginTop: "2%",
            gap: "2%",
            title: {
                textTransform: "uppercase",
                textAlign: "center",
                padding: 4,
                fontSize: "2rem",
                fontWeight: "bold"
            },
            first: {
                width: "100%",
                display: "flex",
                gap: "2%",
                steps: {
                    padding: 15,
                    icon1: {
                        width: "3rem",
                        height: "100%",
                        textAlign: "center"
                    },
                    title: {
                        fontSize: "17px",
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
                    weightButton: {
                        fontSize: "2rem",
                        padding: 0

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
        }
    }, layout)


    const add = (e) => {

    }

    const handleSubmit = async () => {
        const api = new NinjaAPI();
        const nutritionInfo = await api.getNutritionInfo(unit, value, foodName);



        let temp = shoppingList.concat(nutritionInfo)

        setShoppingList(temp);
    }

    return <Layout>
        <div style={styles.clientHome}>
            {/*<div style={styles.clientHome.title}>*/}
            {/*    Home*/}
            {/*</div>*/}
            <CardLayout>
                <CalorieBrokenDown/>
            </CardLayout>

            <div style={styles.clientHome.first}>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faShoePrints}/>
                    <h2 style={styles.clientHome.first.steps.title}>3400/6000</h2>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faBed}/>
                    <h2 style={styles.clientHome.first.steps.title}>Good</h2>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faHeartPulse} color={"red"}/>
                    <h2 style={styles.clientHome.first.steps.title}>50 BPM</h2>
                </CardLayout>
            </div>


            {/*<CardLayout style={styles.clientHome.first.nutrition}>*/}
            {/*    <div style={styles.clientHome.first.nutrition.header}>*/}
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
            {/*    </div>*/}
            {/*    <div style={styles.clientHome.first.nutrition.body}>*/}
            {/*        <TextField onChange={(e) => setText(e.currentTarget.value)}  id="outlined-basic" label="Search" variant="outlined"/>*/}
            {/*        <Button  onSubmit={() => add()} variant="contained">Add</Button>*/}
            {/*    </div>*/}
            {/*</CardLayout>*/}
            <CardLayout style={styles.clientHome.first.nutrition}>

                <ToggleButtonGroup
                    value={unit}
                    onChange={(event, newValue) => setUnit(newValue)}
                >
                    <ToggleButton  style={styles.clientHome.first.nutrition.weightButton} value="grams">grams</ToggleButton>
                    <ToggleButton  style={styles.clientHome.first.nutrition.weightButton} value="kg">kg</ToggleButton>
                    <ToggleButton   style={styles.clientHome.first.nutrition.weightButton} value="litres">litres</ToggleButton>
                </ToggleButtonGroup>
                <TextField
                    label="Value"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <TextField
                    label="Food Name"
                    value={foodName}
                    onChange={event => setFoodName(event.target.value)}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Add Meal
                </Button>
            </CardLayout>



            <CardLayout title={"Meal History"} style={styles.clientHome.first.nutritionList}>
                <div style={styles.clientHome.first.nutritionList.listOfFood}>
                    ddfsdfdf
                    {shoppingList.length > 0 && shoppingList.map((item) => {
                       return <><p>fsdsdf</p>
                            <MealWidget
                                item={item}
                                name={item.name}
                                value={item.value}
                                calories={item["calories"]}
                                fat={item["fat_total_g"]}
                                protein={item["protein_g"]}
                                carbs={item["carbohydrates_total_g"]}
                            /></>
                    })
                    })
                </div>
            </CardLayout>

        </div>
    </Layout>


}

export default clientHome;