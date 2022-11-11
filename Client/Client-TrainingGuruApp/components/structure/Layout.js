import {Box, Container, Flex} from "native-base";
import {StyleSheet} from "react-native";
import NavigationBar from "./NavigationBar";

const styles = StyleSheet.create({
    layout: {
        height: "100%",
        margin: "2%",
        display: "flex",
        navigation: {
            width: "20%",
            height: "20%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column"
        }
    }
})

function Layout() {
    return <div style={styles.layout}>
        <div style={styles.layout.navigation}>
            <NavigationBar/>
        </div>
        <div style={styles.layout.content}>
            Content
        </div>
    </div>

}


export default Layout;