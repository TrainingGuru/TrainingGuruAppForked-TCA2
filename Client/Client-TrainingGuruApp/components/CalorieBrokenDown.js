import CalorieGauge from "./reusable/CalorieGauge";
import {Dimensions, Text, View} from "react-native";
import CreateResponsiveStyle from "../utils/responsiveStyle";


function calorieBrokenDown({nutrition}) {
    let layout = {
        width: Dimensions.get('window').width
    }
    const styles = CreateResponsiveStyle({
        calorieBrokenDown: {}
    }, {
        calorieBrokenDown: {
            display: "flex",
            flexWrap: "wrap",
            placeContent: "flex-end center",
            alignItems: "center",
            gap: 15,
            gridRowGap: 20,
            justifyContent: "space-around",
            margin: 4,
            flexDirection: "row"
        }
    }, layout)
    return <View style={styles.calorieBrokenDown}>
        <View ><Text style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center"}} >Fat</Text>
            <CalorieGauge  startColor={"#f80202"} startColor={"#f80202"} maxValue={nutrition.TotalFats} value={nutrition.FatsIntake}/>
        </View>
        <View ><Text style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center"}} >Protein</Text>
            <CalorieGauge startColor={"#ee25ee"} endColor={"#ee25ee"}  maxValue={nutrition.TotalProtein} value={nutrition.ProteinIntake} />
        </View>
        <View ><Text style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center"}} >Carbs</Text>
            <CalorieGauge startColor={"#ff7500"} endColor={"#ff7500"} maxValue={nutrition.TotalCarbohydrates} value={nutrition.CarbohydratesIntake} />
        </View>
        <View ><Text style={{ marginTop: "auto", marginBottom: "auto", textAlign: "center"}} >Calories</Text>
            <CalorieGauge startColor={"#eac60c"} endColor={"#eac60c"} maxValue={nutrition.TotalCalories} value={nutrition.CaloriesIntake} />
        </View>
    </View>
}

export default calorieBrokenDown;