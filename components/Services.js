import { Image, View, Text, StyleSheet } from 'react-native';

const Services = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                    source={require('./assets/accueil.jpg')} resizeMode="cover" style={styles.image}
                />
             <Image
                    source={require('./assets/logo.png')}
                    style={styles.logo}
                />
            <Text style={styles.title}>Services </Text>
            <View>
                <Text style={styles.text}>
                    A CAVM  nos principaux service est la vente de circuits et voyage dans les quatres coins du monde.
                    {'\n\n'}
                    {'\t'}Nous sommes motiver par ses valeurs:
                    {'\n\n'}
                    {'\t'}des circuits vers des endroits atyoiques.
                    {'\n\n'}
                    {'\t'}
                    une commande rapide et efficace
                    {'\n\n'}
                    {'\t'}
                    Un respect pour la clientelle jamais vus</Text>
                <Image
                    source={require('./assets/service.jpg')}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    text: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
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
      logo:{
        width: 50,
        height: 50,
        margintop: '10px',
        marginleft:'20px',
      }
});