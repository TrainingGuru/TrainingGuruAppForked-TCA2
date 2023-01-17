import {useEffect, useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import WorkoutCard from "../../components/workout/WorkoutCard";
import Layout from "../../components/structure/Layout";


const Workouts = () => {
    const [weeks, setWeeks] = useState([])
    const styles = StyleSheet.create({
        container: {},
        workoutCardsContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 10
        },
        workoutCard: {
            width: '100%',
            height: 200,
            borderRadius: 10,
            backgroundColor: 'white',
            marginVertical: 10,
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
        },
        workoutCardImage: {
            width: '100%',
            height: '70%',
        },
        workoutCardHeader: {
            width: '100%',
            height: '15%',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
        },
        workoutCardHeaderText: {
            fontWeight: 'bold',
        },
        workoutCardBody: {
            width: '100%',
            height: '15%',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        selectedWeek: {
            margin: -20,
            backgroundColor: '#e2dbdb',
            color: 'black',
            textAlign: 'center',
            fontSize: "1.2rem",
            paddingTop: 2,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
            shadowColor: 'rgb(0, 0, 0)',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.8,
            shadowRadius: 2,
        },
    });

    // use state to keep track of which week is currently open
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [workouts, setWorkouts] = useState([
        {
            id: 1,
            date: 'Jan 15, 2022',
            name: 'Full body workout',
            image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            time: '20 mins',
            completed: true
        },
        {
            id: 2,
            date: 'March 2, 2022',
            name: 'Abs workout',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            time: '15 mins',
            completed: false
        },
        {
            id: 2,
            date: 'March 3, 2022',
            name: 'Abs workout',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            time: '15 mins',
            completed: false
        },
        {
            id: 3,
            date: 'Jan 3, 2022',
            name: 'Cardio workout',
            image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3QlMjB3b3Jrb3V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            time: '30 mins',
            completed: true
        },
        // ... more workouts
    ]);

    let weekMap = {};

    // use useEffect to set the state of current week as the week that has today's date
    useEffect(() => {
        workouts.map((workout) => {
            const startWeek = getWeekStartDate(new Date(workout.date));
            if (!weeks.includes(startWeek)) {
                setWeeks((prevWeeks) => [...prevWeeks, startWeek]);
            }
            setCurrentWeek(startWeek)
        });


        setWeeks((prevWeeks) => [...prevWeeks.sort((b, a) => b - a).filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })]);


    }, [workouts]);

    const getWeekStartDate = (date) => {
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const currentDate = date.getDate();

        const firstDayOfWeek = new Date(currentYear, currentMonth, currentDate - date.getUTCDay());
        firstDayOfWeek.setUTCHours(0, 0, 0, 0);

        return firstDayOfWeek;
    }

    // function to get the week number from a date
    const isInWeekRange = (date, week) => {
        let startDate = getWeekStartDate(date);
        return startDate >= week && startDate <= week;
    }

// function to handle when a week is clicked
    const handleWeekClick = (weekNumber) => {
        setCurrentWeek(weekNumber);
    }

    return (
        <Layout>
            <View style={styles.container}>
                {/* display the weeks at the bottom of the screen */}
                {weeks.map((week, index) => {
                    console.log(weeks)
                    return <TouchableOpacity
                                             key={index} onPress={() => handleWeekClick(week)} style={week === currentWeek ? {marginTop: 18} : {}}>
                        {week !== currentWeek ? <Text>Week {week.toDateString()}</Text> :
                            <><View><Text style={styles.selectedWeek}>Week {week.toDateString()}</Text></View>
                                <ScrollView>
                                    <View style={styles.workoutCardsContainer}>
                                        {workouts.map(workout => {
                                            // only display workouts for the currently open week
                                            if (isInWeekRange(new Date(workout.date), currentWeek)) {
                                                return (
                                                    <WorkoutCard
                                                        key={workout.id}
                                                        workout={workout}
                                                    />
                                                );
                                            }
                                        })}
                                    </View>
                                </ScrollView>
                            </>}
                    </TouchableOpacity>
                })}
            </View>
        </Layout>
    );
}

export default Workouts