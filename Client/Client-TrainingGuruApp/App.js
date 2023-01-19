import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Workouts from "./pages/client/Workouts";
import {Text, Image, View, StyleSheet} from "react-native";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 55,
        paddingBottom: "30%"
    },
});

function App() {
    return (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Workouts" component={Workouts}   options={{
                        headerTitleAlign: 'center',
                        headerTitle: () => (
                            <View style={styles.container}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                                />
                            </View>
                        ),
                        headerStyle: {
                            borderBottomWidth: 0
                        }
                    }} />
                    <Stack.Screen name="Profile" component={Profile}  options={{
                        headerTitle: () => (
                            <View style={styles.container}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                                />
                            </View>
                        )
                    }} />
                {/*    <Stack.Screen name="Workouts" component={Workouts} options={{*/}
                {/*        headerTitle: () => (*/}
                {/*            <View style={styles.container}>*/}
                {/*                <Image*/}
                {/*                    style={styles.image}*/}
                {/*                    source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}*/}
                {/*                />*/}
                {/*            </View>*/}
                {/*    )*/}
                {/*}} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;