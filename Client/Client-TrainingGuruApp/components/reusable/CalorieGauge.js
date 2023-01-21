import React from 'react';
import { View, Text } from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function CalorieGauge({ startColor, endColor , value, maxValue}) {
    const radius = 30;
    let state = {
        value: (value/ maxValue) * 100
    };
    const fillColor = endColor;

    return (
        <View>
            <AnimatedCircularProgress
                size={radius * 2}
                width={5}
                fill={state.value}
                tintColor={fillColor}
                backgroundColor="black"
            >
                {
                    (fill) => (


                        <View>
                            <Text style={{textAlign: 'center', fontSize: 12}}>
                                {Math.round(value).toString()} / {maxValue.toString()}
                            </Text>
                            <Text style={{textAlign: 'center', fontSize: 10}}>
                            {`${Math.round(fill)}%`}
                        </Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        </View>
    );
}

export default CalorieGauge;