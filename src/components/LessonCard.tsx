import { View, Text, StyleSheet,Pressable } from 'react-native';

type LessonCardProps = {
    emoji: string;
    title: string;
    onPress: () => void;
};

export default function LessonCard({ emoji, title,onPress }: LessonCardProps) {
    return (
        <Pressable
            style={styles.card}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {emoji} {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '88%',
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 22,
        marginBottom: 15,
        elevation: 4,

        // iOS shadow properties
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },

    text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#5D4037',
    },
});