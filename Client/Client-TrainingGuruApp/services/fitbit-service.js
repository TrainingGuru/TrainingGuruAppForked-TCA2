export class Fitbit {
    constructor() {
        this.accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5NEwiLCJzdWIiOiI5VDNRVkQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBycHJvIHJudXQgcnNsZSByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc1MTA3NjU0LCJpYXQiOjE2NzUwNzg4NTR9.n9R_0dWMqVzA2ocp-pxgeMsLZ6Vu-Mx4qrZHLxcLXIA";
        this.myHeaders = new Headers();
        this.myHeaders.append("Authorization", `Bearer ${this.accessToken}`);
        this.myHeaders.append("Cookie", "JSESSIONID=654B2525E1964AC9485082367B8E6452.fitbit1; fct=c34cf120e6c14124ab0a0d6fd0141829");
    }

    refreshToken() {
        const refreshToken = "2a98ca671de242032abd5ea09f3c2be0c03d963443f9f4971dc424d71bcb5657";
        const requestOptions = {
            method: "POST",
            headers: this.myHeaders,
            redirect: "follow"
        };

        return fetch(`https://api.fitbit.com/oauth2/token?grant_type=refresh_token&refresh_token=${refreshToken}`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log("error", error));

    }

    getActivities(date) {
        const requestOptions = {
            method: "GET",
            headers: this.myHeaders,
            redirect: "follow"
        };

        return fetch(`https://api.fitbit.com/1/user/23994L/activities/date/${date}.json`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log("error", error));
    }

    getSummary(date, userId) {
        const requestOptions = {
            method: "GET",
            headers: this.myHeaders,
            redirect: "follow"
        };

        return fetch(`https://api.fitbit.com/1/user/${userId}/foods/log/water/date/${date}.json`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log("error", error));
    }


    async getAccessToken() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic MjM5OTRMOjhjNGJiZjE1M2M4OTRiMjIyM2ZmODBmMGRiZmI3YmEy");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "JSESSIONID=977F3A2BE5AC6C4221E9C80CFE290AB1.fitbit1; fct=a5cce73b8d0746e6b12390aef05927d5");

        var urlencoded = "grant_type=client_credentials";

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        const response = await fetch("https://api.fitbit.com/oauth2/token", requestOptions);
        const json = await response.json();
        console.log(json);
    }

     async getUserProfile() {
        const accessToken = await this.getAccessToken();
        const endpoint = 'https://api.fitbit.com/1/user/-/profile.json';
        const headers = new Headers({
            Authorization: `Bearer ${accessToken}`,
        });
        const options = {
            method: 'GET',
            headers,
        };

        try {
            const response = await fetch(endpoint, options);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }

}