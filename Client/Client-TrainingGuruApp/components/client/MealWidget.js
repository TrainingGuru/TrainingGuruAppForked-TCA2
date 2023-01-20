import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CalorieGauge from "../reusable/CalorieGauge";


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
            flex: 1
        },
        cardTopRowLeftText: {
            fontWeight: 'bold',
            fontSize: 18
        },
        cardTopRowRight: {
            flex: 1,
            alignItems: 'flex-end'
        },
        cardTopRowRightText: {
            fontSize: 16
        },
        cardMiddleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },
        cardMiddleRowLeft: {
            flex: 1
        },
        cardMiddleRowMiddle: {
            flex: 1
        },
        cardMiddleRowRight: {
            flex: 1
        },
        cardBottomRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        },
        cardBottomRowLeft: {
            flex: 1
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
                    <Text style={styles.cardTopRowLeftText}>{name}</Text>
                </View>
                <View style={styles.cardTopRowRight}>
                    <Text style={styles.cardTopRowRightText}>{value} {unit}</Text>
                </View>
            </View>
            <View style={styles.cardMiddleRow}>
                <View style={styles.cardMiddleRowLeft}>
                    <CalorieGauge value={carbs} maxValue={maxCarbs} startColor="#4CAF50" endColor="#8BC34A"
                                  label="Carbs"/>
                </View>
                <View style={styles.cardMiddleRowMiddle}>
                    <CalorieGauge value={calories} maxValue={maxCalories} startColor="#F44336" endColor="#FF9800"
                                  label="Calories"/>
                </View>
                <View style={styles.cardMiddleRowRight}>
                    <CalorieGauge value={protein} maxValue={maxProtein} startColor="#2196F3" endColor="#03A9F4"
                                  label="Protein"/>
                </View>
                <View style={styles.cardBottomRowLeft}>
                    <CalorieGauge value={fat} maxValue={maxFat} startColor="#9C27B0" endColor="#E91E63" label="Fat"/>
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

