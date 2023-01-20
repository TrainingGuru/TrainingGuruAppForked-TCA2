import {Dimensions, Text, View} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Divider} from "native-base";

export default function MealWidget({name, weight, time, unit, value, calories, fat, protein, carbs, item}) {
    let layout = {
        width: Dimensions.get('window').width
    }

    let timeNow = new Date(time);
    let timeNowString = timeNow.toLocaleTimeString();

    const styles = CreateResponsiveStyle({
        mealWidget: {
            gen: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                fontSize: 20,
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
                <Text>{name}</Text>
            </View>
            <View style={styles.mealWidget.gen.weight}>
                <Text>{value}g</Text>
            </View>
            <View style={styles.mealWidget.gen.record}>
                <Text>{time}</Text>
            </View>
        </View>
        <View style={styles.mealWidget.mealInfo}>
            <View style={styles.mealWidget.mealInfo.sugar}>
                <Text>carbs {carbs}g</Text>
            </View>
            <View style={styles.mealWidget.mealInfo.calories}>
                <Text>Calories {calories}</Text>
            </View>
            <View style={styles.mealWidget.mealInfo.protein}>
                <Text>Protein {protein}g</Text>
            </View>
            <View style={styles.mealWidget.mealInfo.fat}>
                <Text>Fat {fat}g</Text>
            </View>
        </View>
        <Divider/>
    </View>
}