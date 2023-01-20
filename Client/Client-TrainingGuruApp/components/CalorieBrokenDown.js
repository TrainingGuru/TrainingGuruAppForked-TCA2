import CalorieGauge from "./reusable/CalorieGauge";
import {Dimensions, Text, View} from "react-native";
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
            gap: 15,
            gridRowGap: 20,
            justifyContent: "space-around",
            margin: 4
        }
    }, layout)
    return <View style={styles.calorieBrokenDown}>
        <View><Text>Fat</Text>
            <CalorieGauge startColor={"#f80202"} endColor={"#f80202"}/>
        </View>
        <View><Text>Protein</Text>
            {/*<CalorieGauge startColor={"#ff7500"} endColor={"#ff7500"}/>*/}
        </View>
        <View><Text>Carbs</Text>
            {/*<CalorieGauge startColor={"#ee25ee"} endColor={"#ee25ee"}/>*/}
        </View>
        <View><Text>Fat</Text>
            {/*<CalorieGauge startColor={"#0e6cfa"} endColor={"#0e6cfa"}/>*/}
        </View>
    </View>
}

export default calorieBrokenDown;