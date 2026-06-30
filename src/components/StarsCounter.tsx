import { View, Text,StyleSheet } from 'react-native';

export default function StarsCounter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ⭐ 12
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#91b6e3',
        paddingHorizontal:18,
        paddingVertical:8,
        borderRadius:20
    },

    text:{
        fontSize:20,
        fontWeight:'bold'
    }
})