
import React, { useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import {useNavigation} from "@react-navigation/core";

const SplashScreen = () => {
    const [animation] = useState(new Animated.Value(0));
    const navigation = useNavigation();

    React.useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            navigation.navigate('ClientHome');
        }, 3000);
    }, []);

    const textTranslate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0],
    });

    const imageOpacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View style={{ transform: [{ translateY: textTranslate }] }}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Lose Weight</Text>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Build Muscle</Text>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Eat Better</Text>
            </Animated.View>

            <Animated.Image
                source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                style={{ width: 200, height: 200, opacity: imageOpacity }}
            />
        </View>
    );
};

export default SplashScreen;