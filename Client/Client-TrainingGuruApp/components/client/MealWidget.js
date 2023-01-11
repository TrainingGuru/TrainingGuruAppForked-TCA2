import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Divider} from "@mui/material";

export default function MealWidget({name, weight, time, unit, value, calories, fat, protein, carbs, item}) {
    let layout = {
        width: Dimensions.get('window').width
    }
    console.log(protein)
    console.log(item)

    let timeNow = new Date(time);
    let timeNowString = timeNow.toLocaleTimeString();

    const styles = CreateResponsiveStyle({
        mealWidget: {
            gen: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                fontSize: "20px",
                fontWeight: "bold",
                name: {},
                weight: {},
            },
            mealInfo: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                sugar: {},
                calories: {},
                protein: {},
                fat: {}
            }
        }
    }, {
        mealWidget: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gen: {
                display: "flex",
                justifyContent: "space-around",
                fontWeight: "bolder",
                name: {},
                weight: {},
            },
            mealInfo: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                sugar: {},
                calories: {},
                protein: {},
                fat: {}
            }
        }

    }, layout)
    return  <div style={styles.mealWidget}>
        <div style={styles.mealWidget.gen}>
            <div>
                {name}
            </div>
            <div style={styles.mealWidget.gen.weight}>
                {value}g
            </div>
            <div style={styles.mealWidget.gen.record}>
                {time}
            </div>
        </div>
        <div style={styles.mealWidget.mealInfo}>
            <div style={styles.mealWidget.mealInfo.sugar}>
                carbs {carbs}g
            </div>
            <div style={styles.mealWidget.mealInfo.calories}>
                Calories {calories}
            </div>
            <div style={styles.mealWidget.mealInfo.protein}>
                Protein {protein}g
            </div>
            <div style={styles.mealWidget.mealInfo.fat}>
                Fat {fat}g
            </div>
        </div>
        <Divider/>
    </div>
}