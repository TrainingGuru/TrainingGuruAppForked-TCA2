const clientId = '2395P3';
const clientSecret = '9a7b2ea21730dc04d115cb52c799ecf1';
const redirectUri = 'http://localhost:3000/fitbit-callback';
const authorizationUri = 'https://www.fitbit.com/oauth2/authorize';
const tokenUri = 'https://api.fitbit.com/oauth2/token';

export const getAccessToken = (authorizationCode) => {
    return fetch(tokenUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'code=' + authorizationCode + '&grant_type=authorization_code&redirect_uri=' + redirectUri
    })
        .then((response) => response.json())
        .then((data) => {
            return data.access_token;
        });
};

export const getActivityData = async () => {

    let accessToken = await getAccessToken();
    const date = new Date();
    const today = date.toISOString().substring(0, 10);
    return fetch(`https://api.fitbit.com/1/user/-/activities/date/${today}.json`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then((response) => response.json());
};
