import {Dimensions, View} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Divider} from "native-base";

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
    return  <View style={styles.mealWidget}>
        <View style={styles.mealWidget.gen}>
            <View>
                {name}
            </View>
            <View style={styles.mealWidget.gen.weight}>
                {value}g
            </View>
            <View style={styles.mealWidget.gen.record}>
                {time}
            </View>
        </View>
        <View style={styles.mealWidget.mealInfo}>
            <View style={styles.mealWidget.mealInfo.sugar}>
                carbs {carbs}g
            </View>
            <View style={styles.mealWidget.mealInfo.calories}>
                Calories {calories}
            </View>
            <View style={styles.mealWidget.mealInfo.protein}>
                Protein {protein}g
            </View>
            <View style={styles.mealWidget.mealInfo.fat}>
                Fat {fat}g
            </View>
        </View>
        <Divider/>
    </View>
}