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
        if (response.status === 201) {
            return true;
        } else {
            return false;
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
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    }
};

export default api;