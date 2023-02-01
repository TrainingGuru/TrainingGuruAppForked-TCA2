import {ActivityIndicator, Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

export const LoadingDialog = ({loading}) => {
    alert(loading)
    const styles = StyleSheet.create({
        exerciseNameContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        weightContainer: {
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10
        },
        container: {
            padding: 10,
            width: "100%"
        },
        name: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: 'center',
            color: '#333'
        },
        exerciseRow: {
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 10,
            width: "100%",
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        exerciseName: {
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
            color: '#333',
            marginBottom: 10
        },
        reps: {
            marginHorizontal: 10,
            fontSize: 14,
            color: '#555',
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        modalContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        modalInnerContainer: {
            width: "50%",
            height: "20%",
            backgroundColor: "#fff",
            padding: 20,
            alignItems: "center",
            justifyContent: "center"
        },
        modalTitle: {
            fontSize: 20,
            marginBottom: 20
        },
        notesInput: {
            width: "100%",
            height: "60%",
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            marginBottom: 20,
            textAlignVertical: "top"
        },
        modalButtonsContainer: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        modalCancelButton: {
            backgroundColor: "#ccc",
            padding: 10,
            width: "40%"
        },
        modalSubmitButton: {
            backgroundColor: "#33cc33",
            padding: 10,
            width: "40%"
        },
        modalButtonText: {
            textAlign: "center",
            color: "#fff"
        },
        weight: {
            fontSize: 14,
            color: '#555',
            width: "40%"
        },

        input: {
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            fontSize: 14,
            color: '#555',
        },
        submitButton: {
            backgroundColor: '#4CAF50',
            padding: 10,
            margin: 15,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        submitButtonText:{
            color: 'white',
        },
    });

    alert("dfsdf")

    return      <Modal
        animationType="slide"
        transparent={true}
        visible={loading}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
        }}
    >

        <View style={styles.modalContainer}>
            <Text>dfsdfsdf</Text>
            <View style={styles.modalInnerContainer}>
                {/*<Text style={styles.modalTitle}>Notes for your Coach</Text>*/}
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={{ marginTop: 10 }}>Loading...</Text>
                <View style={styles.modalButtonsContainer}>
                    {/*<TouchableOpacity*/}
                    {/*    style={styles.modalCancelButton}*/}
                    {/*    onPress={() => {*/}
                    {/*        setModalVisible(!modalVisible);*/}
                    {/*    }}>*/}
                    {/*    <Text style={styles.modalButtonText}>Cancel</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity*/}
                    {/*    style={styles.modalSubmitButton}*/}
                    {/*    onPress={submitNotes}*/}
                    {/*>*/}
                    {/*    <Text style={styles.modalButtonText}>Submit</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </View>
        </View>
    </Modal>
}
