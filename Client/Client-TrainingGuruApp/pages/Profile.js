import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    'profile-content': {
        height: 100,
        backgroundColor: "#b21919"
    }
})

export const Profile = ({navigation, route}) => {
    return <div style={styles["profile-content"]}>
       Profile
    </div>
}


export default Profile;