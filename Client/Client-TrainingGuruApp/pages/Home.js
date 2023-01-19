import {StyleSheet} from 'react-native';
import {View} from "react-native";
import Layout from "../components/structure/Layout";

const styles = StyleSheet.create({})

export const Home = () => {
    return <View>
        <View style={styles.container}>
          <Layout>
              home
          </Layout>
        </View>
    </View>
}


export default Home;