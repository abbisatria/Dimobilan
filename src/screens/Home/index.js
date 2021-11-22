import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IcBookmarkOff, IcNotif, IcSearch} from '../../assets';

const Home = () => {
  const data = [
    {
      id: 1,
      name: 'BMW 5 Series Coupe',
      category: 'sports',
      price: 1000000,
      image:
        'https://pengirimanmobiljakarta.com/wp-content/uploads/2020/10/yellow-audi-car-png-hd-19.png',
    },
    {
      id: 2,
      name: 'Toyota Vios Limo',
      category: 'sports',
      price: 500000,
      image:
        'https://pengirimanmobiljakarta.com/wp-content/uploads/2020/10/yellow-audi-car-png-hd-19.png',
    },
    {
      id: 3,
      name: 'BMW 5 Series Coupe',
      category: 'sports',
      price: 1000000,
      image:
        'https://pengirimanmobiljakarta.com/wp-content/uploads/2020/10/yellow-audi-car-png-hd-19.png',
    },
    {
      id: 4,
      name: 'Toyota Vios Limo',
      category: 'sports',
      price: 500000,
      image:
        'https://pengirimanmobiljakarta.com/wp-content/uploads/2020/10/yellow-audi-car-png-hd-19.png',
    },
    {
      id: 5,
      name: 'BMW 5 Series Coupe',
      category: 'sports',
      price: 1000000,
      image:
        'https://pengirimanmobiljakarta.com/wp-content/uploads/2020/10/yellow-audi-car-png-hd-19.png',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Welvome Abbi!</Text>
          <Text style={styles.subTitle}>Find Your Cars!</Text>
        </View>
        <View style={styles.notif}>
          <IcNotif />
        </View>
      </View>
      <View style={styles.input}>
        <IcSearch />
        <TextInput placeholder="Search car.." style={styles.textInput} />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={null}>
              <Image style={styles.imageHeader} source={{uri: item.image}} />
            </TouchableOpacity>
          );
        }}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.available}>
        <Text style={styles.text}>Available Car's</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.cardAvailable} onPress={null}>
                <TouchableOpacity style={styles.bookmark} onPress={null}>
                  <IcBookmarkOff />
                </TouchableOpacity>
                <Image
                  style={styles.imageAvailable}
                  source={{uri: item.image}}
                />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <Text style={styles.text}>Best Car's</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.cardBest} onPress={null}>
                <Image style={styles.imageHeader} source={{uri: item.image}} />
                <View style={styles.gapBestCar}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.category}</Text>
                </View>
                <Text>{item.price}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    color: '#081D43',
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 24,
    color: '#081D43',
    fontWeight: 'bold',
  },
  notif: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 52,
  },
  textInput: {
    marginLeft: 10,
  },
  card: {
    paddingHorizontal: 4,
    paddingVertical: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
  },
  available: {
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#021638',
    marginBottom: 16,
  },
  cardAvailable: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
  },
  imageHeader: {
    resizeMode: 'cover',
    width: 59,
    height: 33,
  },
  imageAvailable: {
    resizeMode: 'cover',
    width: 113,
    height: 63,
  },
  bookmark: {
    alignItems: 'flex-end',
  },
  itemName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#021638',
  },
  itemPrice: {
    fontSize: 12,
    color: '#021638',
  },
  cardBest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 19,
    marginRight: 10,
  },
  gapBestCar: {
    marginHorizontal: 12,
  },
});
