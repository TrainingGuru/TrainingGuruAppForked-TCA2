import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieBrokenDown from "../../components/CalorieBrokenDown";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faShoePrints} from "@fortawesome/free-solid-svg-icons/faShoePrints";


export const clientHome = () => {
    let layout = {
        width: Dimensions.get('window').width
    }
    const styles = CreateResponsiveStyle({
        clientHome: {
            display: "flex",
            title: {
                textTransform: "uppercase",
                textAlign: "center",
                padding: 4,
            }
        }
    }, {
        clientHome: {
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "uppercase",
            fontFamily: "Play",
            marginTop: "2%",
            gap: "2%",
            title: {
                textTransform: "uppercase",
                textAlign: "center",
                padding: 4,
                fontSize: "2rem",
                fontWeight: "bold"
            },
            first: {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                steps: {
                    padding: 15,
                    icon1: {
                        width: "6rem",
                        height: "100%"
                    },
                    title: {
                        fontSize: "17px",
                        textAlign: "center",
                    }
                }
            }
        }
    }, layout)


    return <Layout>
        <div style={styles.clientHome}>
            {/*<div style={styles.clientHome.title}>*/}
            {/*    Home*/}
            {/*</div>*/}
            <CardLayout>
                <CalorieBrokenDown/>
            </CardLayout>

            <div style={styles.clientHome.first}>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faShoePrints}/>
                    <h2 style={styles.clientHome.first.steps.title}>3400/6000</h2>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faShoePrints}/>
                </CardLayout>
            </div>

        </div>
    </Layout>


}

export default clientHome;