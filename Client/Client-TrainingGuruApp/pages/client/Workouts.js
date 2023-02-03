import {useEffect, useState} from "react";
import {Text, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import WorkoutCard from "../../components/workout/WorkoutCard";
import Layout from "../../components/structure/Layout";
import {useNavigation} from "@react-navigation/core";
import APIClient from "../../services/client-api";


const Workouts = () => {
        const navigation = useNavigation();
        const [loading, setLoading] = useState(false);
        const [weekMap, setWeekMap] = useState({})

        useEffect(() => {
            setLoading(true)
            // APIClient.WorkoutWeeks("3").then(r => {
let r = {
                value : true,
   "weeksDate" :[
        {

            "date": "2023-01-26",
            "weekId": 1,
            "workouts": [
                {
                    "ClientWorkoutID": 1,
                    "ClientID": 3,
                    "TrainerWorkoutID": 2,
                    "Date": "2023-01-26",
                    "Week": 1,
                    "Notes": "Competed and Ticked off through Post man Test",
                    "Completed": true,
                    "TrainerWorkout": {
                        "id": 2,
                        "TrainerID": 1,
                        "WorkoutName": "Chest and Arms Workout"
                    }
                },
                {
                    "ClientWorkoutID": 2,
                    "ClientID": 3,
                    "TrainerWorkoutID": 1,
                    "Date": "2023-01-28",
                    "Week": 1,
                    "Notes": null,
                    "Completed": false,
                    "TrainerWorkout": {
                        "id": 1,
                        "TrainerID": 1,
                        "WorkoutName": "Legs Work"
                    }
                },
                {
                    "ClientWorkoutID": 4,
                    "ClientID": 3,
                    "TrainerWorkoutID": 1,
                    "Date": "2023-01-27",
                    "Week": 1,
                    "Notes": null,
                    "Completed": false,
                    "TrainerWorkout": {
                        "id": 1,
                        "TrainerID": 1,
                        "WorkoutName": "Legs Work"
                    }
                }
            ]
        },
            {
                "date"
            :
                "2023-02-06",
                    "weekId"
            :
                3,
                    "workouts"
            :
                [
                    {
                        "ClientWorkoutID": 3,
                        "ClientID": 3,
                        "TrainerWorkoutID": 1,
                        "Date": "2023-02-06",
                        "Week": 3,
                        "Notes": null,
                        "Completed": false,
                        "TrainerWorkout": {
                            "id": 1,
                            "TrainerID": 1,
                            "WorkoutName": "Legs Work"
                        }
                    }
                ]
            }
        ]
        }
                 if(r.value){
                    let map = {}
                    console.log("sddsdf")
                    console.log(r.weeksDate)
                    r.weeksDate.map((date) => {
                        console.log("date " + date
                        )
                        const startWeek = getWeekStartDate(new Date(date.date));
                        console.log(startWeek)
                        console.log("!dfds")
                        console.log(date.date)
                        console.log(date.workouts)
                        console.log(JSON.stringify(date.workouts))
                        console.log(date.weekId)

                        weekMap[startWeek] = {weekId : date.weekId, workouts: date.workouts};
                        console.log("week")
                        console.log( weekMap[startWeek])
                        if (!map[startWeek]) {
                            map[startWeek] = 1
                            setWeeks((prevWeeks) => [...prevWeeks, startWeek].sort((b, a) => a - b));
                        }

                        setCurrentWeek(startWeek)
                    });

                }
                else {

                }
                setLoading(false)
            // })

        }, [])

    console.log("dfsddfsd")
    alert(currentWeek)
    // console.log("week")
    // console.log(weekMap)

    const handleWorkoutPress = (workout) => {
        if (workout && workout.exercises && workout.exercises.length > 0) {
            navigation.navigate('WorkoutDetails', { workout });
        }
    };


    const [weeks, setWeeks] = useState([])
    const styles = StyleSheet.create({
        container: {
            marginTop: 15
        },
        workoutCardsContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 20,
        },
        workoutCard: {
            width: '100%',
            height: 200,
            borderRadius: 10,
            backgroundColor: 'white',
            marginTop: 10,
            borderWidth: 1,
            borderColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
            fontSize: 12,
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
        unselected: {
            backgroundColor: '#e8e5e5',
            color: 'black',
            textAlign: 'center',
            fontSize: 12,
            paddingTop: 2,
            border: "1px solid #545353FF"

        }
    });

    // use state to keep track of which week is currently open
    const [currentWeek, setCurrentWeek] = useState(new Date());



    // use useEffect to set the state of current week as the week that has today's date
    // useEffect(() => {
    //     let map = {}
    //     workouts.map((workout) => {
    //         const startWeek = getWeekStartDate(new Date(workout.date));
    //         if (!map[startWeek]) {
    //             map[startWeek] = 1
    //             setWeeks((prevWeeks) => [...prevWeeks, startWeek].sort((b, a) => b - a));
    //         }
    //         setCurrentWeek(startWeek)
    //     });
    //
    //
    // }, [workouts]);

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
        <Layout loading={loading}>
            <View style={styles.container}>
                {/*display the weeks at the bottom of the screen*/}
                {weeks && weeks.length ? weeks.map((week, index) => {
                    // console.log(weeks)


                    return week !== currentWeek ?
                        <TouchableOpacity key={index} onPress={() => week !== currentWeek && handleWeekClick(week)}
                                          style={week === currentWeek ? {marginTop: 18} : {}}>
                            {week !== currentWeek ? <Text style={styles.unselected}>Week {week.toDateString()}</Text> :
                                <View style={{width: "100%"}}>

                                    <Text style={styles.selectedWeek}>Week {week.toDateString()}</Text>


                                        <View style={styles.workoutCardsContainer}>
                                            {weekMap[currentWeek].workouts.map((workout, index) => {
                                                console.log("sdssdf32434234")
                                                console.log(weekMap[currentWeek].workouts)
                                                console.log(workout)
                                                alert(workout.Week)
                                                    return (
                                                        <View key={index}>
                                                            {/*<WorkoutCard workout={workout}/>*/}
                                                        </View>
                                                    );
                                                })
                                            })}
                                        </View>

                                </View>}
                        </TouchableOpacity> : <View key={index} style={week === currentWeek ? {marginTop: 18} : {}}>
                            <View>

                                <Text style={styles.selectedWeek}>Week {week.toDateString()}</Text>

                                <View style={styles.workoutCardsContainer}>
                                    {weekMap[currentWeek] && weekMap[currentWeek].workouts && (

                                        <View style={{ width: "100%"}}>
                                            {weekMap[currentWeek].workouts.sort((a, b) => {
                                                return  new Date(a.Date) - new Date(b.Date)
                                            }).map((workout) => {
                                                return  <TouchableOpacity style={{ width: "100%"}} key={week.id} onPress={() => handleWorkoutPress(workout)}><WorkoutCard workout={workout}/></TouchableOpacity>
                                            })}
                                        </View>

                                        )}



                                    {/*{weekMap[currentWeek] && weekMap[currentWeek].workouts && weekMap[currentWeek].workouts  ? <View> {Object.entries(weekMap[currentWeek].workouts).map((workout, index) => (*/}
                                    {/*    <View key={index.toString()}>*/}
                                    {/*        <Text>{workout[1].Date.toString()}</Text>*/}
                                    {/*    </View> ))}*/}
                                    {/*</View>: <Text> current {currentWeek.toDateString()}</Text>}*/}



                                    {/*{ weekMap[currentWeek] && weekMap[currentWeek].workouts && weekMap[currentWeek].workouts.map((workout, index) => {*/}
                                    {/*    console.log("sdssdf32434234")*/}
                                    {/*    console.log(weekMap[currentWeek].workouts)*/}
                                    {/*    console.log(workout)*/}
                                    {/*    alert(workout.Week)*/}

                                    {/*    return <Text key={workout.date}>fsdsdf</Text>*/}

                                    {/*})*/}
                                    {/*})}*/}
                                </View>
                            </View>


                        </View>
                }) : <Text style={{textAlign: "center", fontSize: 50}}> You have no workout weeks</Text> }
            </View>
        </Layout>
    );
}

export default Workouts