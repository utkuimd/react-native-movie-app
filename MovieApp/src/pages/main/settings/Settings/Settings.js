import React from 'react';
import {SafeAreaView, View, Text, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DevSettings} from 'react-native';
import styles from './Settings.style';

const Settings = () => {
  const userInRedux = useSelector(state => state.user);
  const user = JSON.parse(userInRedux.user)[0];
  const navigation = useNavigation();

  const gotoEditProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('user');
    DevSettings.reload();
  };

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
        <Pressable style={styles.settingsButton} onPress={gotoEditProfile}>
          <Text style={styles.settingsButton_text}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.settingsButton} onPress={null}>
          <Text style={styles.settingsButton_text}>Change Theme</Text>
        </Pressable>
      </View>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.settingsButton_text}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;
