import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 70,
        backgroundColor: '#0d5e5e',
    },
    
    logo: {
        width: 280,
        height: 190,
        marginBottom: 32,
        alignSelf: 'center',
    },
    
    input: {
        marginBottom: 20,
        padding: 5,
        borderWidth: 0.3,
        borderRadius: 18,
        backgroundColor: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    
    button: {
        backgroundColor: '#000',
        width: 280,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    
    textButton: {
        color: '#fff',
    },
    
    forget: {
        marginTop: 20,
    },
    
    textForget: {
        color: '#00ff55',
        textDecorationLine: 'underline',
    
    }
    
    });