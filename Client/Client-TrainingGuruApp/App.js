import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Workouts from "./pages/client/Workouts";
import {Image,StyleSheet} from "react-native";

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
    },
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}   options={{
                    headerTitle: () => (
                        <Image
                            style={styles.image}
                            source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                        />
                    )
                }} />
                <Stack.Screen name="Profile" component={Profile}  options={{
                    headerTitle: () => (
                        <Image
                            style={styles.image}
                            source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                        />
                    )
                }} />
                <Stack.Screen name="Workouts" component={Workouts} options={{
                    headerTitle: () => (
                        <Image
                            style={styles.image}
                            source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}
                        />
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;