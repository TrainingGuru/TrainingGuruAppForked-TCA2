import {StyleSheet} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

function NavigationBar() {

    const styles = StyleSheet.create({
        listNav: {
            fontSize: "1.2rem",
            textTransform: "uppercase",
            fontFamily: "Play",
            fontWeight: "Bold",
            flexDirection: "row",
            alignContent: "space-around",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",

            icon: {
                width: "1.5rem",
                height: "100%",
                people: {
                    width: "2.5rem"
                }
            }
        }

    })
    return <>
        <div style={styles.listNav}>
            <FontAwesomeIcon style={styles.listNav.icon} icon={faHouseChimney}/>
            Home
        </div>
        <div style={styles.listNav}>
            <FontAwesomeIcon style={{...styles.listNav.icon, ...styles.listNav.icon.people}} icon={faPeopleGroup}/>
            Clients
        </div>
        <div style={styles.listNav}>
            <FontAwesomeIcon  style={styles.listNav.icon} icon={faUser}/>
            Profile
        </div>
    </>

}

export default NavigationBar