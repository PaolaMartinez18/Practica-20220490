import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';


export default function LoginR({ navigation }) { 
    return (
      <View style={styles.container}>

        <View style={styles.card}>
            <View style={styles.contentText}>

            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    card:{
        margin: 20,
        backgroundColor:'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation: 5,
    },  
});
