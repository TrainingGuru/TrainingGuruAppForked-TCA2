import {Dimensions, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import CreateResponsiveStyle from "../../utils/responsiveStyle";
import {Platform} from 'react-native';
import {faDumbbell} from "@fortawesome/free-solid-svg-icons/faDumbbell";
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from "react";


function NavigationBar() {
    const navigation = useNavigation();
    const [activeRoute, setActiveRoute] = useState(navigation.state ? navigation.state.routes[navigation.state.routes.length -1].name : '');
    console.log(activeRoute)





    useEffect(() => {
        const unsubscribe = navigation.addListener('state', e => {
            setActiveRoute(e.data.state.routes[e.data.state.routes.length -1].name)
        });

        return unsubscribe;
    }, [navigation]);


    let clientView = true;

    let size = Dimensions.get('window').width;

    let layout = {
        width: size
    }
    let styles = CreateResponsiveStyle({
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

    return <View style={{width: "100%"}}>
        {clientView ? (<View style={{width: "100%",     flexDirection: "row",
            justifyContent: "space-evenly"}}>
            <View style={styles.listNav}>
                {Platform.OS !== 'web' ? <TouchableOpacity onPress={() => navigation.navigate('ClientHome')}>
                        <FontAwesomeIcon icon={faHouseChimney}
                                         size={Platform.OS !== 'web' && size < 768 && 35}
                                         color={activeRoute === 'ClientHome' ? '#ff0000' : '#000000'}
                        />
                    </TouchableOpacity>
                 : <FontAwesomeIcon style={styles.listNav.icon} icon={faHouseChimney}
                                      color={activeRoute === 'ClientHome' ? '#ff0000' : '#000000'}
                                      onPress={() => navigation.navigate('ClientHome')}
                />}
            </View>

            <View style={styles.listNav}>
                {Platform.OS !== 'web' ?
                    <TouchableOpacity onPress={() => navigation.navigate('Workouts')}>
                    <FontAwesomeIcon icon={faDumbbell} size={Platform.OS !== 'web' && size < 768 && 47}
                                     color={activeRoute === 'Workouts' ? '#ff0000' : '#000000'}
                                     />
                    </TouchableOpacity>
                   : <FontAwesomeIcon style={{...styles.listNav.icon, ...styles.listNav.icon.people}}
                                          icon={faPeopleGroup}
                                          color={activeRoute === 'Workouts' ? '#ff0000' : '#000000'}
                                          onPress={() => navigation.navigate('Workouts')}
                    />}
            </View>
            <View style={styles.listNav}>
                {Platform.OS !== 'web' ?
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <FontAwesomeIcon size={size < 768 && 35}
                                                          icon={faUser}
                                                          color={activeRoute === 'Profile' ? '#ff0000' : '#000000'}/>
                    </TouchableOpacity>
                        : <FontAwesomeIcon style={styles.listNav.icon}
                                      icon={faUser}
                                      color={activeRoute === 'Profile' ? '#ff0000' : '#000000'}
                                      onPress={() => navigation.navigate('Profile')}
                />}
            </View>
        </View>) : <View>
            <View>
                {Platform.OS !== 'web' ? <FontAwesomeIcon icon={faHouseChimney}
                                                          size={Platform.OS !== 'web' && size < 768 && 35}
                                                          color={activeRoute === 'ClientHome' ? '#ff0000' : '#000000'}
                                                          onPress={() => navigation.navigate('ClientHome')}
                /> : <FontAwesomeIcon style={styles.listNav.icon} icon={faHouseChimney}
                                      color={activeRoute === 'ClientHome' ? '#ff0000' : '#000000'}
                                      onPress={() => navigation.navigate('ClientHome')}
                />}
                {size > 768 && <Text>Home</Text>}
            </View>

            <View style={styles.listNav}>
                {Platform.OS !== 'web' ? <FontAwesomeIcon icon={faPeopleGroup}
                                                          size={Platform.OS !== 'web' && size < 768 && 47}
                                                          color={activeRoute === 'Workouts' ? '#ff0000' : '#000000'}
                                                          onPress={() => navigation.navigate('Workouts')}
                /> : <FontAwesomeIcon style={{...styles.listNav.icon, ...styles.listNav.icon.people}}
                                      icon={faPeopleGroup}
                                      color={activeRoute === 'Workouts' ? '#ff0000' : '#000000'}
                                      onPress={() => navigation.navigate('Workouts')}
                />}
                {size > 768 && <Text>Clients</Text>}
            </View>
            <View style={styles.listNav}>
                {Platform.OS !== 'web' ? <FontAwesomeIcon size={size < 768 && 35}
                                                          icon={faUser}
                                                          color={activeRoute === 'Profile' ? '#ff0000' : '#000000'}
                    // onPress={() => navigation.navigate('Profile')}
                /> : <FontAwesomeIcon style={styles.listNav.icon}
                                      icon={faUser}
                                      color={activeRoute === 'Profile' ? '#ff0000' : '#000000'}
                    // onPress={() => navigation.navigate('Profile')}
                />}
                {size > 768 && <Text>Profile</Text>}
            </View>
        </View>}
    </View>
}

export default NavigationBar;
