import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {IcGetStarted} from '../../assets';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.illustrator}>
        <IcGetStarted />
      </View>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Let's Get Started</Text>
          <Text style={styles.desc}>
            Enjoy your vacation with our premium car rental
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  illustrator: {
    alignItems: 'center',
    marginTop: 200,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021638',
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: '#021638',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 60,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#021638',
    borderRadius: 12,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  textButton: {
    fontSize: 12,
    color: 'white',
  },
});
