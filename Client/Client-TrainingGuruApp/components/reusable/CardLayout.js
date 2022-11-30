import {Dimensions} from "react-native";
import CreateResponsiveStyle from "../../utils/responsiveStyle";

function CardLayout({title, children}) {
    let layout = {
        width: Dimensions.get('window').width
    }
    const styles = CreateResponsiveStyle({
        cardLayout: {}
    }, {
        cardLayout: {
            width: "100%",
            backgroundColor: "grey",
            header: {
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "play"
            },
            content: {

            }

        }
    }, layout)


    return <div style={styles.cardLayout}>
        {title && <h2 style={styles.cardLayout.header}>
            {title}
        </h2>}
        <div style={styles.cardLayout.content}>
            {children~
        </div>
    </div>
}

export default CardLayout;