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
    },


    WorkoutWeeks: async  (clientId) => {
        var myHeaders = new Headers();

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
            console.log(`${API_URL}${clientId}/WorkoutWeeks`)
        const response = await fetch(`${API_URL}${clientId}/WorkoutWeeks`, requestOptions);
            console.log(response)
        const responseJson = await response.json();
        console.log(responseJson)
        if (response.status === 200) {
            let weeks = responseJson.map((item) => item.Week)
            let arr = []

            for(const week of weeks){
                console.log(week)
                const value = await APIClient.GetWorkoutsForWeeks(clientId, week);
                if(value.value && value.workouts && value.workouts.length > 0){
                    arr.push({date: value.workouts[0].Date, weekId: week, workouts: value.workouts})
                }
            }
            console.log(arr)
            return {value: true, weeksDate: arr};
        }
    },

    GetWorkoutDetails: async (workoutId) => {
        var myHeaders = new Headers();
        console.log("here")
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}/Workout/${workoutId}`, requestOptions);

        if (response.status === 200) {
            const responseJson = await response.json();
            return {value: true, workout: responseJson};
        }
        else {
            return {value: false}
        }

    },

    GetWorkoutsForWeeks : async  (clientId, workoutWeekId) => {
        var myHeaders = new Headers();
    console.log("here")
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}${clientId}/Workouts/${workoutWeekId}`, requestOptions);

        if (response.status === 200) {
            const responseJson = await response.json();
            return {value: true, workouts: responseJson};
        }
        else {
            return {value: false}
        }
    },

    CompleteWorkout: async (Id, notes) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Notes": notes
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // const response = await fetch(`https://traininggurubackend.onrender.com/Client/CompleteWorkout/${Id}`, requestOptions);
        // console.log(response)
        // if (response.status === 200) {
        //     return {value: true};
        // }
        // else {
        //     return {value: false}
        // }
    }

};

export default APIClient;