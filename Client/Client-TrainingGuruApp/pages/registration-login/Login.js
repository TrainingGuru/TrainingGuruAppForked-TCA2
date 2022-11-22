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

    return <div style={styles.login}>
        <div style={styles.login.header}>
            Training Guru
        </div>
        <div style={styles.login.body}>
            <div style={styles.login.body.form}>
                <InputBox text={"username"}/>

                <InputBox text={"password"}/>
            </div>
                <button type="submit">Login</button>
                <input type="checkbox" checked="checked"/> Remember me
                <button type="button" className="cancelbtn"> Cancel</button>
                Forgot <a href="#"> password? </a>
            </div>
        <div style={styles.login.footer}>
    </div>
    </div>
}

export default Login;