import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import LiquidFillGauge from 'react-liquid-gauge';
import { interpolateRgb } from 'd3-interpolate';

function CardLayout({title, children}) {
    let layout = {
        width: Dimensions.get('window').width
    }


    const styles = CreateResponsiveStyle({
        cardLayout: {}
    }, {
        cardLayout: {
            width: "fit-content",
            backgroundColor: "grey",
            height: "fit-content",
            marginTop: "4%",
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20,
            boxShadow: "4px 4px 10px 2px rgba(0,0,0,.8)",
            borderRadius: "20px",
            header: {
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "play"
            },
            content: {}

        }
    }, layout)


    return <div style={styles.cardLayout}>
        {title && <h2 style={styles.cardLayout.header}>
            {title}
        </h2>}
        <div style={styles.cardLayout.content}>
            {children}
        </div>
    </div>
}

export default CardLayout;