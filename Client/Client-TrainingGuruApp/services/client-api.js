const API_URL = "https://traininggurubackend.onrender.com/Client/";

export const APIClient = {
    registerClient: async (trainerId, name, email, password) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            TrainerID: trainerId,
            Name: name,
            Email: email,
            Password: password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}Register`, requestOptions);
        const responseJson = await response.json();

        if (response.status === 201) {
            return {value: true, message: responseJson};
        } else {
            return {value: false, message: responseJson};
        }
    },

    loginClient: async (email, password) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            Email: email,
            Password: password
        });

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}Login`, requestOptions);
        const responseJson = await response.json();
        if (response.status === 200) {
            return {value: true, message: responseJson};
        } else {
            return {value: false, message: responseJson};
        }
    }
};

export default APIClient;