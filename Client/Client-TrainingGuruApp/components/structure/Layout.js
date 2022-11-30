import {Box, Container, Flex} from "native-base";
import {StyleSheet} from "react-native";
import NavigationBar from "./NavigationBar";
import flex from "native-base/src/components/primitives/Flex/index";

const styles = StyleSheet.create({
    layout: {
        height: "100%",
        margin: "2%",
        display: "flex",
        flexDirection: "column",
        base : {
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            header: {
                height: "45%",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                width: "100%",
                img: {
                    height: "100%"
                }
            },
            navigation: {
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column"
            },
        },
        body: {
            display: "flex",
            flexDirection: "row",
            marginLeft: "25%",
        },
    }
})

function Layout({children}) {
    return <div style={styles.layout}>
        <div style={styles.layout.base}>
            <div style={styles.layout.base.header}>
                <img style={styles.layout.base.header.img}
                     src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}/>
            </div>
            <div style={styles.layout.base.navigation}>
                <NavigationBar/>
            </div>
        </div>

        <div style={styles.layout.body}>
            <div style={styles.layout.body.content}>
                {children}
            </div>
        </div>
    </div>

}


export default Layout;