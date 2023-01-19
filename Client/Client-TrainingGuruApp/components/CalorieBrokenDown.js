import CalorieGauge from "./reusable/CalorieGauge";
import {Dimensions, View} from "react-native";
import CreateResponsiveStyle from "../utils/responsiveStyle";


function calorieBrokenDown() {
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
            textAlign: "center",
            gap: "15px",
            gridRowGap: "20px",
            justifyContent: "space-around",
            margin: "4px"
        }
    }, layout)
    return <View style={styles.calorieBrokenDown}>
        <View>Fat
            <CalorieGauge startColor={"#f80202"} endColor={"#f80202"}/></View>
        <View>Protein
            <CalorieGauge startColor={"#ff7500"} endColor={"#ff7500"}/></View>
        <View>Carbs
            <CalorieGauge startColor={"#ee25ee"} endColor={"#ee25ee"}/></View>
        <View>Fat
            <CalorieGauge startColor={"#0e6cfa"} endColor={"#0e6cfa"}/></View>
    </View>
}

export default calorieBrokenDown;