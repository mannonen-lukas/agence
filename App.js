import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Circuits from './components/Circuits.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
import { ImageBackground } from 'react-native-web';

function Acceuil() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ImageBackground
        source={require('./assets/accueil.jpg')}resizeMode="cover" style={styles.image}
      />
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />    <Text style={title}>CAVM</Text>

      <Text>Compagnie d’aviation et de voyage mondiale</Text>
      Grid
      <Button
        onPress={() => navigation.navigate('Ciruits.js')}
        title="Circuits" style={styles.bouton}
      />

      <Text>Qui somme nous?</Text>

      <Text>
        Avec plus de 55 ans d’expertise, CAVM conçoit pour vous une offre complète et adaptée à toutes vos envies de vacances.
        {'\n\n'}
        {'\t'}
        Les possibilités qui s’offrent à vous sont nombreuses ! Un circuit accompagné, un séjour au soleil,
        {'\n\n'}
        {'\t'}
        un autotour découverte ou encore de nombreuses activités dans l’un de nos clubs francophones,
        {'\n\n'}
        {'\t'}
        vous trouverez forcément les vacances dont vous rêvez avec CAVM. </Text>


    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Acceuil" component={Acceuil} options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Circuits" component={Circuits} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator useLegacyImplementation
        component={Root}
        initialRouteName="Root"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Acceuil" component={Acceuil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '430',
    height: '430',
    resizeMode: 'contain'
  },
  title: {
    color: 'red',
    fontSize: '50',
    padding: 'center',
  },
  bouton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  logo: {
    width: 50, 
    height: 50,
    margintop: '10px',
    marginleft:'20px',
  }

});