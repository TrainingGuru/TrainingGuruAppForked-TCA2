import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import LiquidFillGauge from 'react-liquid-gauge';
import { interpolateRgb } from 'd3-interpolate';
import {Divider} from "@mui/material";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";

function CardLayout({title, children, style}) {
    let layout = {
        width: Dimensions.get('window').width
    }

    const styles = CreateResponsiveStyle({
        cardLayout: {}
    }, {
        cardLayout: {
            width: "100%",
            textAlign: "center",
            backgroundColor: "#fcf8f8",
            marginTop: "4%",
            padding: 5,
            boxShadow: "4px 4px 10px 2px rgba(0,0,0,.8)",
            borderRadius: "20px",
            header: {
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "play"
            },
            content: {
                width: "100%"
            }

        }
    }, layout)


    return <View style={{...styles.cardLayout, ...style}} >
        {title && <Text style={styles.cardLayout.header}>
            {title}
        </Text>}
        <View style={styles.cardLayout.content}>
            {children}
        </View>
    </View>
}

export default CardLayout;