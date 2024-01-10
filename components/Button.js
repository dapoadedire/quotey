import { StyleSheet, View, Pressable, Text } from 'react-native';


export default function Button(props) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
})