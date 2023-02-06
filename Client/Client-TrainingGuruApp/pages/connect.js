import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import {Button, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import {getActivityData} from "../services/fitbit-service";

const AFitBitPage = () => {
    const [authorizationCode, setAuthorizationCode] = useState(null);
    const [showWebView, setShowWebView] = useState(true);

    const clientId = '2395P3';
    const redirectUri = 'http://localhost:3000/fitbit-callback';
    const scope = 'activity heartrate location nutrition profile settings sleep social weight';
    const responseType = 'code';
    const navigation = useNavigation();

    // const authorizationUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=2395P3&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&redirect_uri=http://localhost:3000/fitbit-callback`;
    const authorizationUrl = 'https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=2395P3&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=kCBq5L-XL1p7VMG7pCdFRVBBnqZ7_2f0MDG8RuaGiHw&code_challenge_method=S256&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffitbit-callback'


    const handleNavigationStateChange = async (webViewState) => {
        if (webViewState.url.includes(redirectUri) && !webViewState.url.includes("https://www.fitbit.com/oauth2/")) {
            setShowWebView(false);
            const url = webViewState.url;
            console.log("sdfdsf" + url)
            const codeIndex = url.indexOf("code=");
            if (codeIndex !== -1) {
                const code = url.substring(codeIndex + 5);
                console.log("Code: ", code);
                setAuthorizationCode(code);
                await AsyncStorage.setItem('Auth', code);
                navigation.navigate("ClientProfile");
            } else {
                console.log("Code not found in URL: ", url);
            }
        }
    };

    if (showWebView) {
        return (
            <WebView
                source={{ uri: authorizationUrl }}
                onNavigationStateChange={handleNavigationStateChange}
            />
        );
    }

    if (authorizationCode) {
        return (
            <View>
                <Text>Authorization Code: {authorizationCode}</Text>
            </View>
        );
    }

    return (
        <View>
            <Button title="Authorize with Fitbit" onPress={() => setShowWebView(true)} />
        </View>
    );
};

export default AFitBitPage;