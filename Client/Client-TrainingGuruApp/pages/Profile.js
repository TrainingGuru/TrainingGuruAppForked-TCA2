import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    'profile-content': {
        height: 100,
        backgroundColor: "#b21919"
    }
})

export const Profile = ({navigation, route}) => {
    return <View style={styles["profile-content"]}>
       Profile
    </View>
}


export default Profile;