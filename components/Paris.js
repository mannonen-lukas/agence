import { ScrollView, Text, StyleSheet } from 'react-native';

const Paris = () => {
    return (
        <ScrollView>
            <ImageBackground
                source={require('./assets/accueil.jpg')} resizeMode="cover" style={styles.image}
            />

            <Image
                source={require('./assets/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('./assets/Paris2.jpg')}
                style={styles.image}
            />{"\n\n"}
            <Text>
                {
                    myArray.map(() => (
                        <>
                            <Text>Voyage en France{"\n\n"}</Text>
                            <Text>prix: 2000€ ttc/pers{"\n\n"}</Text>
                            <Text style={styles.color}>Acheter{"\n\n"}</Text>                        </>
                    ))
                }
            </Text>

            <Text>
                Paris déploie ses fastes architecturaux et ses musées d’exception,
                {'\n\n'}
                {'\t'}
                mais vous pouvez aussi visiter la capitale française un peu plus loin des sentiers battus.
                {'\n\n'}
                {'\t'}
                Découvrez Paris au rythme des Parisiens, sans oublier de vous en mettre plein la vue !
            </Text>
        </ScrollView>
    );
}

export default Paris;

const styles = StyleSheet.create({
    text: {
        padding: 20
    },
    color: {
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