import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieBrokenDown from "../../components/CalorieBrokenDown";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faShoePrints} from "@fortawesome/free-solid-svg-icons/faShoePrints";
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons/faHeartPulse";
import {faBed} from "@fortawesome/free-solid-svg-icons/faBed";

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
                gap: "2%",
                steps: {
                    padding: 15,
                    icon1: {
                        width: "3rem",
                        height: "100%",
                        textAlign: "center"
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
                        icon={faHeartPulse} color={"red"} />
                    <h2 style={styles.clientHome.first.steps.title}>50 BPM</h2>
                </CardLayout>
                <CardLayout style={styles.clientHome.first.steps}>
                    <FontAwesomeIcon
                        style={{...styles.clientHome.first.steps.icon, ...styles.clientHome.first.steps.icon1}}
                        icon={faHeartPulse}  />
                    <h2 style={styles.clientHome.first.steps.title}>Good</h2>
                </CardLayout>
            </div>

        </div>
    </Layout>


}

export default clientHome;