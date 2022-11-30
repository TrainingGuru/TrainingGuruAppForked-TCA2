import {StyleSheet} from 'react-native';
import {View} from "react-native";
import Layout from "../components/structure/Layout";

const styles = StyleSheet.create({})

export const Home = () => {
    return <View>
        <div style={styles.container}>
          <Layout>
              home
          </Layout>
        </div>
    </View>
}


export default Home;