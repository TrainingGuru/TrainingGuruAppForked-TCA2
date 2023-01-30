import {Box, Container, Flex} from "native-base";
import NavigationBar from "./NavigationBar";
import flex from "native-base/src/components/primitives/Flex/index";
import StyleSheet from 'react-native-media-query';
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Dimensions, Image, View, Text, ScrollView} from "react-native";
import {LoadingDialog} from "../LoadingDialog";

function Layout({loading = false, children}) {

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
            position: "relative",
            flex: 1,
            flexDirection: "column",
            base: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                header: {
                    flex: 1,
                    alignContent: "center",
                    justifyContent: "center",
                    img: {
                        height: "100%"
                    }
                },
                navigation: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'grey',
                    padding: 20,
                    zIndex: 1,
                    justifyContent: "space-around",

                },
            },
            body: {
                paddingBottom: 120,
                flex: 1,
                flexDirection: "row",
                content: {
                    flex: 1,
                    margin: 20,
                    marginTop: 1,
                    height: "100%",
                    zIndex: 0,
                }
            },
        }
    }, layout)
// console.log(styles)

    return <View style={styles.layout}>
        <LoadingDialog loading={loading}/>
        {layout.width > 768 ? <View style={styles.layout.base}>
            <View style={styles.layout.base.navigation}>
                <NavigationBar/>
            </View>
        </View> : <View style={styles.layout.base.navigation}>
            <NavigationBar/>
        </View>}

        <ScrollView><View style={styles.layout.body}>
            <View style={styles.layout.body.content}>
                <View>{children}</View>
            </View>
        </View></ScrollView>
    </View>

}


export default Layout;