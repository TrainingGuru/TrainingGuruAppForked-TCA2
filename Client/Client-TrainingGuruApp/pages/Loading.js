import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

const Loading = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('./wheel.png')}
                style={{ width: 100, height: 100 }}
            />
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{ marginTop: 10 }}>Loading...</Text>
        </View>
    );
};

export default Loading;