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
        var myHeaders = new Headers();


        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://traininggurubackend.onrender.com/Client/Login?Email=seanmc@hotmail.com&Password=1236`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
};

export default APIClient;