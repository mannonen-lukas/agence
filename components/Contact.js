import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Contact = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('./assets/accueil.jpg')} resizeMode="cover" style={styles.image}
                />

                <Image
                    source={require('./assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Contact </Text>

                <Text>
                    {
                        myArray.map(() => (
                            <>
                                <Text>Mail : CAVM@gmail.com{"\n\n"}</Text>
                                <Text>N° Téléphone: 01 23 25 26 25 {"\n\n"}</Text>
                                <Text>adresse: 32 rue des pains noir 92 000 saint cloud{"\n\n"}</Text>
                                <Text>envoyer un message pour un rendez-vous{"\n\n"}</Text>
                                <View>
                                    <Text style={styles.text}>envoyer +</Text>
                                    <Button
                                        onPress={() => navigation.navigate('Acceuil')}
                                        title="Envoyer +"
                                    />
                                </View>
                            </>
                        ))
                    }
                </Text>
                <StatusBar style="auto" />
            </ScrollView>
        </View>

    );

}
export default Contact;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain'
    },
    title: {
        color: 'red',
        fontSize: '50',
    },

    logo: {
        width: 50,
        height: 50,
        margintop: '10px',
        marginleft: '20px',
    }
});