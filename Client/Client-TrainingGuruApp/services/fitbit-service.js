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
}