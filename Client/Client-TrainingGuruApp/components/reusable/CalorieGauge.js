import {interpolateRgb} from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import {Text, View} from "react-native";
function CalorieGauge({startColor, endColor}){
    const radius = 30;
    let state = {
        value: 50
    };
    const interpolate = interpolateRgb(startColor, endColor);
    const fillColor = interpolate(state.value / 100);


    const gradientStops = [
        {
            key: '0%',
            stopColor: "#000000",
            stopOpacity: 1,
            offset: '0%'
        },
        {
            key: '50%',
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: '50%'
        },
        {
            key: '100%',
            stopColor: "#000000",
            stopOpacity: 0.5,
            offset: '100%'
        }
    ];

    return   <LiquidFillGauge
        style={{ margin: '0 auto' }}
        width={radius * 2}
        height={radius * 2}
        value={state.value}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius / 2);
            const valueStyle = {
                fontSize: textPixels
            };
            const percentStyle = {
                fontSize: textPixels * 0.6
            };

            return (
                <View>
                    <Text className="value" style={valueStyle}>{value}</Text>
                    <Text style={percentStyle}>{props.percent}</Text>
                </View>
            );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
            fill: fillColor
        }}
        waveStyle={{
            fill: fillColor
        }}
        textStyle={{
            fill: "#000000",
            fontFamily: 'Arial'
        }}
        waveTextStyle={{
            fill: "#000000",
            fontFamily: 'Arial'
        }}

    />




}

export default CalorieGauge;