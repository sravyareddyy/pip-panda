import { Image, StyleSheet } from 'react-native';

export default function Panda() {
    return (
        <Image
            source={require('../assets/images/panda.png')}
            style={styles.panda}
        />
    );
}

const styles = StyleSheet.create({
    panda: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
    },
});