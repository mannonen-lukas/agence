import { ScrollView, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const Inde = () => {
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
                source={require('./assets/Inde.jpg')}
                style={styles.image}
            />{"\n\n"}
            <Text>
                {
                    myArray.map(() => (
                        <>
                            <Text>Voyage en Inde{"\n\n"}</Text>
                            <Text>prix: 666€ ttc/pers{"\n\n"}</Text>
                            <Text>Acheter{"\n\n"}</Text>                        </>
                    ))
                }
            </Text>

            <Text>
                Un voyage en Inde est envoûtant, initiatique, fascinant par la diversité infinie des paysages, traditions et monuments.
                {'\n\n'}
                {'\t'}Palais de maharajahs, forteresses mogholes et sanctuaires foisonnants,
                {'\n\n'}
                {'\t'}des cités de grès du désert aux plateaux lunaires du Ladakh ou aux méandres des backwaters...
                {'\n\n'}
                {'\t'} c’est un festival de couleurs et de senteurs qui s’offrent à vous.
                {'\n\n'}
                {'\t'} Nos conseillers spécialistes du sous-continent indien ont sillonné le pays pour partager avec vous leurs bons plans, leurs adresses secrètes,
                {'\n\n'}
                {'\t'}leurs idées d’excursions, et élaborer de nouveaux circuits en Inde et combinés de destinations, kaléidoscope de contrées magiques et de moments inoubliables.
                {'\n\n'}
                {'\t'}Et si vous ne trouvez pas le voyage Inde de vos rêves, ils construiront votre itinéraire à la carte,
                {'\n\n'}
                {'\t'}pour un voyage sur mesure en Inde ou un voyage de noces en Inde synonymes d’évasion, de culture et de raffinement.
            </Text>
        </ScrollView>
    );
}

export default Inde;

const styles = StyleSheet.create({
    text: {
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        margintop: '10px',
        marginleft: '20px',
    },
    color: {
        color: 'red',
        fontSize: '50',
    }
});