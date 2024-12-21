import Geolocation from '@react-native-community/geolocation';
import React, {useEffect} from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const GoogleMap = () => {
  const getUserLocation = async () => {
    Geolocation.getCurrentPosition(Postion => {
      console.log(Postion);
    }); 
};
    const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
          getUserLocation();
        } else {
          Alert.alert(
            'Permission needed',
            'Location permission is needed to show your location on map',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
    }
  };

  useEffect(() => {
      requestLocationPermission();
  }, []);
  return (
    <View style={styles.container}>
      <Text>React Native Maps</Text>
      <MapView
        provider={PROVIDER_GOOGLE} // Added the missing prop here
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title={'Testing'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMap;