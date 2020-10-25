// Global Imports
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

export const AlphabetStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        zIndex: 2,
    } as ViewStyle,
    alphabetButton: {
        paddingVertical: 5,
        paddingHorizontal: 5,
    } as ViewStyle,
    alphabetText: {
        fontSize: 10,
        textAlign: "center",
    } as TextStyle,
    selected: {
        fontWeight: "bold",
    } as TextStyle,
});
