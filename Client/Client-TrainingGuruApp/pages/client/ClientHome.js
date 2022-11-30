import Layout from "../../components/structure/Layout";
import {Dimensions, StyleSheet} from "react-native";
import CardLayout from "../../components/reusable/CardLayout";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import CalorieBrokenDown from "../../components/CalorieBrokenDown";


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
            marginTop: "2%",
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
            {/*<div style={styles.clientHome.title}>*/}
            {/*    Home*/}
            {/*</div>*/}
            <CardLayout title={"Nutrition"}>
            <CalorieBrokenDown/>
            </CardLayout>

        </div>
    </Layout>


}

export default clientHome;