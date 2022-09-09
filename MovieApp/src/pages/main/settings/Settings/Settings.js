import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './Settings.style';
import axios from 'axios';

const Settings = () => {
  const userInRedux = useSelector(state => state.user);
  useEffect(() => {
    console.log(JSON.parse(userInRedux.user));
  }, []);
  const user = JSON.parse(userInRedux.user)[0];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetail}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://cdn.dribbble.com/users/146798/screenshots/1382276/__gif___darth_vader_arrested.gif',
          }}
        />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.settingsButtons_div}>
        <Pressable style={styles.settingsButton} onPress={null}>
          <Text style={styles.settingsButton_text}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.settingsButton} onPress={null}>
          <Text style={styles.settingsButton_text}>Change Theme</Text>
        </Pressable>
      </View>
      <Pressable style={styles.logoutButton} onPress={null}>
        <Text style={styles.settingsButton_text}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;
