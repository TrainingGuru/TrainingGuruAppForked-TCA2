import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export const ConnectFitbitModel = ({ open, setOpen, connectFunction }) => {
    const [fitbitCode, setFitbitCode] = useState("");
    const [isConnected, setIsConnected] = useState(false);

    const styles = StyleSheet.create({
        input: {
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            fontSize: 14,
            color: "#555",
        },
        submitButton: {
            backgroundColor: "#4CAF50",
            padding: 10,
            margin: 15,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        },
        cancelButton: {
            backgroundColor: "#f8032d",
            padding: 10,
            margin: 15,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        },
        submitButtonText: {
            color: "white",
        },
        container: {
            padding: 10,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        modalContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalInnerContainer: {
            width: "80%",
            height: "40%",
            backgroundColor: "#fff",
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
        },
        title: {
            fontSize: 20,
            marginBottom: 20,
            fontWeight: "bold",
            color: "#333",
        },
        resultText: {
            fontSize: 16,
            marginTop: 20,
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
        },
    });

    const handleConnect = () => {
        setOpen(false);
        connectFunction();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalInnerContainer}>
                    <Text style={styles.title}>Connect Fitbit</Text>
                    <TextInput
                        placeholder="Enter 5 digit code"
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={5}
                        onChangeText={(text) => setFitbitCode(text)}
                        value={fitbitCode}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleConnect}
                        disabled={fitbitCode.length !== 5}
                    >
                        {isConnected ? (
                            <Text style={styles.submitButtonText}>Connected</Text>
                        ) : (
                            <Text style={styles.submitButtonText}>Connect</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                            setOpen(!open)
                        }}>
                        <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};