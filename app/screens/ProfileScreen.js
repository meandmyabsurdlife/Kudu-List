import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={{ uri: 'https://placeimg.com/200/200/people' }} />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@gmail.com</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoItem}>Age: 25</Text>
          <Text style={styles.infoItem}>Location: New York</Text>
          <Text style={styles.infoItem}>Interests: Sports, Music, Travel</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#FAC846',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  info: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;