import {Box, Container, Flex} from "native-base";
import NavigationBar from "./NavigationBar";
import flex from "native-base/src/components/primitives/Flex/index";
import StyleSheet from 'react-native-media-query';
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Dimensions, Image, View, Text} from "react-native";

function Layout({children}) {

    let layout = {
        width: Dimensions.get('window').width
    }

    const styles = CreateResponsiveStyle({
        layout: {
            height: "100%",
            margin: "2%",
            display: "flex",
            flexDirection: "column",
            base: {
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
    }, {
        layout: {
            flex: 1,
            flexDirection: "column",
            base: {
                flexDirection: "row-reverse",
                justifyContent: "center",
                height: "10%",
                header: {
                    flex: 1,
                    alignContent: "center",
                    justifyContent: "center",
                    img: {
                        height: "100%"
                    }
                },
                navigation: {
                    flexDirection: "row",
                    alignSelf: "flex-end",
                    margin: 20,
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "grey"
                },
            },
            body: {
                flex: 1,
                flexDirection: "row",
                content: {
                    flex: 1,
                    margin: 20,
                    marginTop: -10
                }
            },
        }
    }, layout)
console.log(styles)

    return <View style={styles.layout}>
        <View style={styles.layout.base}>
            <View style={styles.layout.base.header}>
                <Image style={styles.layout.base.header.img}
                     source={{ uri: "https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}}/>
            </View>
            <View style={styles.layout.base.navigation}>
                {/*<NavigationBar/>*/}
            </View>
        </View>

        <View style={styles.layout.body}>
            <View style={styles.layout.body.content}>
                <View>{children}</View>
            </View>
        </View>
    </View>

}


export default Layout;