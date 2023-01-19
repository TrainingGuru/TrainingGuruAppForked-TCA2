import {Dimensions, StyleSheet, View} from "react-native";
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer'
// import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
// import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
// import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import CreateResponsiveStyle from "../../utils/responsiveStyle";

function NavigationBar() {



   let  size = Dimensions.get('window').width;

    let layout = {
        width: size
    }
    let styles = CreateResponsiveStyle(    {
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

    },
        {
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
                    width: "4.5rem",
                    height: "100%",
                    people: {
                        width: "7.5rem"
                    }
                }
            }

        },
        layout)


    return <>
        <View style={styles.listNav}>
            {/*<FontAwesomeIcon style={styles.listNav.icon} icon={faHouseChimney}/>*/}
            {size >  768 &&  <>Home</>}
        </View>
        <View style={styles.listNav}>
            {/*<FontAwesomeIcon style={{...styles.listNav.icon, ...styles.listNav.icon.people}} icon={faPeopleGroup}/>*/}
            {size >  768 && <>Clients</>}
        </View>
        <View style={styles.listNav}>
            {/*<FontAwesomeIcon  style={styles.listNav.icon} icon={faUser}/>*/}
            {size >  768 &&<>Profile</>}
        </View>
    </>

}

export default NavigationBar