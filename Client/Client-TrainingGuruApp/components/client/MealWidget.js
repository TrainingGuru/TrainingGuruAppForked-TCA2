import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalorieGauge from "../reusable/CalorieGauge";
import {Center} from "native-base";


export const MealWidget = ({ name, weight, time, unit, value, calories, fat, protein, carbs, maxCarbs, maxProtein, maxFat, maxCalories }) => {
    const styles = StyleSheet.create({
        cardContainer: {

        },
        cardTopRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        cardTopRowLeft: {
            flex: 1,
            display: "flex"
        },
        cardTopRowLeftText: {
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: "center"
        },
        cardTopRowRight: {
            flex: 1,
        },
        cardTopRowRightText: {
            fontSize: 14,
            textAlign: "center"
        },
        cardMiddleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },
        cardMiddleRowLeft: {
            display: "flex",
            alignItems: "center",
            flex: 1,
        },
        cardMiddleRowMiddle: {
            display: "flex",
            alignItems: "center",
            flex: 1,
        },
        cardMiddleRowRight: {
            display: "flex",
            alignItems: "center",
            flex: 1,
        },
        cardBottomRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },
        cardBottomRowLeft: {
            flex: 1,
            display: "flex",
            alignItems: "center",
        },
        cardBottomRowRight: {
            flex: 1
        },
        cardBottomRowRightButton: {
            backgroundColor: '#d90a0a',
            padding: 10,
            borderRadius: 10
        },
        cardBottomRowRightButtonText: {
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardTopRow}>
                <View style={styles.cardTopRowLeft}>
                    <Text style={styles.cardTopRowLeftText}>{name.toUpperCase()}</Text>
                </View>
                <View style={styles.cardTopRowRight}>
                    <Text style={styles.cardTopRowRightText}>{value} g</Text>
                </View>
            </View>
            <View style={styles.cardMiddleRow}>
                <View style={styles.cardMiddleRowLeft}>
                    <Text style={{ marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>Fat</Text>
                    <CalorieGauge value={fat} maxValue={maxFat}  startColor={"#f80202"} endColor={"#f80202"} label="Fat"/>
                </View>
                <View style={styles.cardMiddleRowMiddle}  >
                    <Text>Protein</Text>
                    <CalorieGauge value={protein} maxValue={maxProtein} startColor={"#ee25ee"} endColor={"#ee25ee"}
                                  label="Protein"/>
                </View>
                <View style={styles.cardMiddleRowRight}>
                    <Text>Carbs</Text>
                    <CalorieGauge value={carbs} maxValue={maxCarbs} startColor={"#ff7500"} endColor={"#ff7500"}
                                  label="Carbs"/>
                </View>
                <View style={styles.cardBottomRowLeft}>
                    <Text>Calories</Text>
                    <CalorieGauge value={calories} maxValue={maxCalories}  startColor={"#eac60c"} endColor={"#eac60c"}
                                  label="Calories"/>
                </View>
            </View>
            <View style={styles.cardBottomRow}>

                <View style={styles.cardBottomRowRight}>
                    <TouchableOpacity style={styles.cardBottomRowRightButton}>
                        <Text style={styles.cardBottomRowRightButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

