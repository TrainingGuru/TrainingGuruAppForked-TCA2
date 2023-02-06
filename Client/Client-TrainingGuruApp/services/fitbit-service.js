import {WebView} from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";

const clientId = '2395P3';
const clientSecret = '9a7b2ea21730dc04d115cb52c799ecf1';
const redirectUri = 'http://localhost:3000/fitbit-callback';
const authorizationUri = 'https://www.fitbit.com/oauth2/authorize';
const tokenUri = 'https://api.fitbit.com/oauth2/token';

const getAccessToken = async (authorizationCode) => {
    const fullCode = authorizationCode.split('#')[0];
  const response = await  fetch("https://api.fitbit.com/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "client_id=2395P3" +
            "&grant_type=authorization_code" +
            "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffitbit-callback" +
            "&code="+fullCode +
            "&code_verifier=3e6g5o593s1u506n314c6j710x5d726r5p3k730x6r4i1j1t521h042g5y4r4u3z6c4w3q6v2f4z2k5m4k586y140r2s48362i4w5i0k5j5k2m670c4n0c1t3v1o4u25"
    })
    console.log("saasfadfdfadd")


    if(response.status === 200){
        const json =  await response.json();
        console.log(json)
        return json["access_token"]
    }


};


export const getFitbitData = async (authorizationCode) => {
    let accessToken = await getAccessToken(authorizationCode);
    const date = new Date();
    const today = date.toISOString().substring(0, 10);

    // Steps data
    const stepsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/steps/date/${today}/1d.json`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })

    // Sleep data
    const sleepResponse = await fetch(`https://api.fitbit.com/1.2/user/-/sleep/date/${today}.json`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })

    // Heart rate data
    const heartRateResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/heart/date/${today}/1d/1sec.json`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })

    // Wait for all responses to finish
    const [stepsData, sleepData, heartRateData] = await Promise.all([stepsResponse.json(), sleepResponse.json(), heartRateResponse.json()]);

    if (stepsResponse.status === 200 && sleepResponse.status === 200 && heartRateResponse.status === 200) {
        // Get the sleep score
        const sleepScore = sleepData.sleep && sleepData.sleep[0] && sleepData.sleep[0].score || "0";

        // Get the steps count
        const steps = stepsData.activities && stepsData.activities[0] && stepsData.activities[0].value || "0" ;


        // Get the average heart rate
        const heartRateSummary = heartRateData.activities && heartRateData.activities[0] &&  heartRateData.activities[0].value && heartRateData.activities[0].value.heartRateZones.reduce((sum, zone) => sum + zone.caloriesOut, 0) || "0";
        const avgHeartRate = heartRateSummary / heartRateData.activities && heartRateData.activities[0] && heartRateData.activities[0].value.heartRateZones.length || "0";

        // console.log("sleepScore" + sleepScore)
        // console.log("avgHeartRate" + avgHeartRate)
        console.log("steps" + steps)

        return {
            value: true,
            sleepScore,
            steps,
            avgHeartRate
        };
    } else {
        return {value: false};
    }
};



