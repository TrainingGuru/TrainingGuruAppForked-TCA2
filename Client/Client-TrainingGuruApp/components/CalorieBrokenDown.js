import CalorieGauge from "./reusable/CalorieGauge";
import {Dimensions} from "react-native";
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
    return <div style={styles.calorieBrokenDown}>
        <div>Fat
            <CalorieGauge startColor={"#f80202"} endColor={"#f80202"}/></div>
        <div>Protein
            <CalorieGauge startColor={"#ff7500"} endColor={"#ff7500"}/></div>
        <div>Carbs
            <CalorieGauge startColor={"#ee25ee"} endColor={"#ee25ee"}/></div>
        <div>Fat
            <CalorieGauge startColor={"#0e6cfa"} endColor={"#0e6cfa"}/></div>
    </div>
}

export default calorieBrokenDown;