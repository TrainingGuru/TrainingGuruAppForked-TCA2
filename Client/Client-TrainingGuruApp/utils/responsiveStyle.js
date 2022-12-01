import {StyleSheet} from "react-native";

export default function CreateResponsiveStyle(
webStyles, mobileStyles, layout
) {
    const web = StyleSheet.create(webStyles);
    const mobile = StyleSheet.create(mobileStyles);

    // Return a function that combines wraps web and mobile styles
     if (layout.width < 768 ) {
            return mobile
        } else return web
}