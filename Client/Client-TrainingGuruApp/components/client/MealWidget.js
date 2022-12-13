import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Divider} from "@mui/material";

export default function MealWidget({name}) {
    let layout = {
        width: Dimensions.get('window').width
    }

    let timeNow = new Date();
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
    return <div style={styles.mealWidget}>
        <div style={styles.mealWidget.gen}>
            <div>
                {name}
            </div>
            <div style={styles.mealWidget.gen.weight}>
             250g
            </div>
            <div style={styles.mealWidget.gen.record}>
                {timeNowString}
            </div>
        </div>
        <div style={styles.mealWidget.mealInfo}>
            <div style={styles.mealWidget.mealInfo.sugar}>
                Sugar 8.2g
            </div>
            <div style={styles.mealWidget.mealInfo.calories}>
                Calories 182
            </div>
            <div style={styles.mealWidget.mealInfo.protein}>
               Protein 9.4g
            </div>
            <div style={styles.mealWidget.mealInfo.fat}>
                Fat 4.9g
            </div>
        </div>
        <Divider/>
    </div>
}