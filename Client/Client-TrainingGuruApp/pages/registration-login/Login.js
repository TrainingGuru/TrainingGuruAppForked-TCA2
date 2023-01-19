import {StyleSheet} from "react-native";
import {TextField} from "@mui/material";
import InputBox from "../../components/reusable/InputBox";

const styles = StyleSheet.create({
    login: {
        height: "100%",
        margin: "2%",
        backgroundColor: "whitesmoke",
        header: {
            height: "20%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            margin: "0 auto"
        },
        body: {
            height: "60%",
            margin: "auto",
            background: "white",
            width: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2%",
            form: {
                display: "flex",
                gap: "2%",
                flexDirection: "column",
                justifyContent: "center"
            }
        }
    }
})


function Login() {

    return <View style={styles.login}>
        <View style={styles.login.header}>
            Training Guru
        </View>
        <View style={styles.login.body}>
            <View style={styles.login.body.form}>
                <InputBox text={"username"}/>

                <InputBox text={"password"}/>
            </View>
                <button type="submit">Login</button>
                <input type="checkbox" checked="checked"/> Remember me
                <button type="button" className="cancelbtn"> Cancel</button>
                Forgot <a href="#"> password? </a>
            </View>
        <View style={styles.login.footer}>
    </View>
    </View>
}

export default Login;