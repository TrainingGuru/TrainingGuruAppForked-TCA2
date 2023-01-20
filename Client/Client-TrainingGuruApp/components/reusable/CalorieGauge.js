import React from 'react';
import { View, Text } from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function CalorieGauge({ startColor, endColor }) {
    const radius = 30;
    let state = {
        value: 50
    };
    const fillColor = endColor;

    return (
        <View>
            <AnimatedCircularProgress
                size={radius * 2}
                width={5}
                fill={state.value}
                tintColor={fillColor}
                backgroundColor="#3d5875"
            >
                {
                    (fill) => (
                        <Text style={{ textAlign: 'center' }}>
                            {`${Math.round(fill)}%`}
                        </Text>
                    )
                }
            </AnimatedCircularProgress>
        </View>
    );
}

export default CalorieGauge;