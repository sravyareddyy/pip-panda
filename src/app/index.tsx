import { View, Text, StyleSheet } from 'react-native';

import Panda from '../components/Panda';
import StarsCounter from '../components/StarsCounter';
import LessonCard from '../components/LessonCard';
import { router } from 'expo-router';
import { lessons } from '../data/lessons';

export default function HomeScreen() {

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <StarsCounter/>
            </View>

            <Panda/>

            <Text style={styles.title}>
                Pip The Panda
            </Text>

            <Text style={styles.subtitle}>
                Let's learn something fun today!
            </Text>


            <View style={styles.cardsContainer}>
                {
                    lessons.map((lesson) => (

                        <LessonCard
                            key={lesson.id}
                            emoji={lesson.emoji}
                            title={lesson.title}
                            onPress={() => router.push(lesson.route as any)}

                        />

                    ))
                }
            </View>

        </View>

    );

}
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#FFF7D6',
        alignItems:'center',
        paddingTop:60
    },

    header:{
        width:'90%',
        alignItems:'flex-end',
        marginBottom:10
    },

    title:{
        fontSize:32,
        fontWeight:'700',
        color:'#4E342E',
        marginTop:10
    },

    subtitle:{
        fontSize:18,
        color:'#6D4C41',
        marginTop:8,
        marginBottom:25
    },

    cardsContainer:{
        width:'100%',
        alignItems:'center'
    }

});