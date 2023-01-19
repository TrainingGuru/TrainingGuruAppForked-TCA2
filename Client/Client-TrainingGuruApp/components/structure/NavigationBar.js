import {Dimensions, StyleSheet, View} from "react-native";
 import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer'
 import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
 import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import { Platform } from 'react-native';

function NavigationBar() {



   let  size = Dimensions.get('window').width;

    let layout = {
        width: size
    }
    let styles = CreateResponsiveStyle(    {
        listNav: {
            fontSize: "1.2rem",
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

    },
        {
            listNav: {
                fontSize: "12.5rem",
                fontWeight: "Bold",
                flexDirection: "row",
                alignContent: "space-around",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                icon: {
                    fill: "red",
                    width: "1.5rem",
                    people: {
                        width: "2.5rem"
                    }
                }
            }

        },
        layout)


    return <>
        <View style={styles.listNav}>
            {Platform.OS !== 'web' ?  <FontAwesomeIcon  icon={faHouseChimney} size={Platform.OS !== 'web' && size <  768 && 35 }/> :<FontAwesomeIcon style={styles.listNav.icon} icon={faHouseChimney}/>}
            {size >  768 &&  <>Home</>}
        </View>

        <View style={styles.listNav}>
            {Platform.OS !== 'web' ?  <FontAwesomeIcon  icon={faPeopleGroup} size={Platform.OS !== 'web' && size <  768 && 47 }/> : <FontAwesomeIcon  style={{...styles.listNav.icon, ...styles.listNav.icon.people}} icon={faPeopleGroup}/>}
            {size >  768 && <>Clients</>}
        </View>
        <View style={styles.listNav}>
            {Platform.OS !== 'web' ?  <FontAwesomeIcon size={size <  768 && 35 } icon={faUser}/> : <FontAwesomeIcon   style={styles.listNav.icon} icon={faUser}/>}
            {size >  768 &&<>Profile</>}
        </View>
    </>

}

export default NavigationBar