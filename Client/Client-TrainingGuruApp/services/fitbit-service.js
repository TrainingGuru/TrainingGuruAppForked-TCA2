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
    fetch("https://api.fitbit.com/oauth2/token", {
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
        .then(response => {
            console.log("response")
            console.log(response)

            return response.json();
        })
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);

        });
    console.log(response)


};


export const getActivityData = async (authorizationCode) => {

    let accessToken = await getAccessToken(authorizationCode);
    const date = new Date();
    const today = date.toISOString().substring(0, 10);
    return fetch(`https://api.fitbit.com/1/user/-/activities/date/${today}.json`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then((response) => response.json());
};




