import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Circuits = ({ navigation }) => {

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
                <Text style={styles.title}>Circuits </Text>

                <Text>
                    {
                        myArray.Circuits(() => (
                            <>
                                <Image
                                    source={require('./assets/Paris.jpg')}
                                    style={styles.image}
                                />{"\n\n"}
                                <Text>France{"\n\n"}</Text>
                                <Button
                                    onPress={() => navigation.navigate('Paris')}
                                    title="acheter le circuits"
                                />
                                <Image
                                    source={require('./assets/China.jpg')}
                                    style={styles.image}
                                />{"\n\n"}
                                <Text>Chine {"\n\n"}</Text>
                                <Button
                                    onPress={() => navigation.navigate('Chine')}
                                    title="acheter le circuits"
                                />
                                <Image
                                    source={require('./assets/Antartique.jpg')}
                                    style={styles.image}
                                />{"\n\n"}
                                <Text>Antartique{"\n\n"}</Text>
                                <Button
                                    onPress={() => navigation.navigate('Inde')}
                                    title="acheter le circuits"
                                />
                                <Image
                                    source={require('./assets/Inde.jpg')}
                                    style={styles.image}
                                />{"\n\n"}
                                <Text>inde{"\n\n"}</Text>
                                <Button
                                    onPress={() => navigation.navigate('Antartique')}
                                    title="acheter le circuits"
                                />
                            </>
                        ))
                    }
                </Text>
                <StatusBar style="auto" />
            </ScrollView>
        </View>

    );


}
export default Circuits;
const styles = StyleSheet.Circuits({
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
    },

    pic: {
        flex: 2,
        justifyContent: 'center',
    }
});