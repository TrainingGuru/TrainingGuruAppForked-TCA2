import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    login: {
        height: "100%",
        margin: "2%",
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
            background: "red",
            width: "50%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2%"
        }
    }
})


function Login() {

    return <div style={styles.login}>
        <div style={styles.login.header}>
            Training Guru
        </div>
        <div style={styles.login.body}>
            <div><label>Username : </label>
                <input type="text" placeholder="Enter Username" name="username" required/>
            </div>
            <div><label>Password : </label>
                <input type="password" placeholder="Enter Password" name="password" required/></div>
            <div>
                <button type="submit">Login</button>
                <input type="checkbox" checked="checked"/> Remember me
                <button type="button" className="cancelbtn"> Cancel</button>
                Forgot <a href="#"> password? </a>
        </div>
    </div>
        <div style={styles.login.footer}>

        </div>
    </div>
}

export default Login;