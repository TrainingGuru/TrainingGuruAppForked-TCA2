import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";
import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieGauge from "../../components/reusable/CalorieGauge";

const styles = StyleSheet.create({})

export const clientHome = () => {
    let layout = {
        width: Dimensions.get('window').width
    }
    const styles = CreateResponsiveStyle({
        clientHome: {
            display: "flex",
            title:{
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
            marginTop: "10%",
            title:{
                textTransform: "uppercase",
                textAlign: "center",
                padding: 4,
                fontSize: "2rem",
                fontWeight: "bold"
            }
        }
    }, layout)


    return <Layout>
        <div style={styles.clientHome}>
            <div style={styles.clientHome.title}>
                Home
            </div>
            <CardLayout title={"calories"}>
                <div>
                    Fat
                    <CalorieGauge startColor={"#18f000"} endColor={"#eac60c"}/>
                </div>
            </CardLayout>

        </div>
    </Layout>


}

export default clientHome;