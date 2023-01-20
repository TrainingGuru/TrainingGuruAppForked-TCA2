import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import LiquidFillGauge from 'react-liquid-gauge';
import { interpolateRgb } from 'd3-interpolate';
import {Divider} from "@mui/material";
import {View, Text, StyleSheet} from "react-native";


function CardLayout({title, children, style}) {
    let layout = {
        width: Dimensions.get('window').width
    }

    const styles = StyleSheet.create({
        cardLayout: {
            width: "100%",
            textAlign: "center",
            backgroundColor: "#fcf8f8",
            marginTop: "4%",
            padding: 5,
            boxShadow: "4px 4px 10px 2px rgba(0,0,0,.8)",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            header: {
                textAlign: "center",
                fontWeight: "bold",
            },
            content: {
                width: "100%"
            }
        }
    });


    return <View style={{...styles.cardLayout, ...style}} >
        {title && <Text style={styles.cardLayout.header}>
            {title}
        </Text>}
        <View style={styles.cardLayout.content}>
            <View>{children}</View>
        </View>
    </View>
}

export default CardLayout;