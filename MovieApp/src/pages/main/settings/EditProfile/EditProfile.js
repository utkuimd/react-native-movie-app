import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../../store';
import styles from './EditProfile.style';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const saveChanges = async () => {
    if (password === passwordAgain) {
      const newUser = [
        {
          email,
          password,
          passwordAgain,
          username,
        },
      ];
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      dispatch(setUser(JSON.stringify(newUser)));
    } else {
      Alert.alert('Please check your information!');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Your Profile!</Text>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Change your email address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Change your password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password again"
            value={passwordAgain}
            onChangeText={setPasswordAgain}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Choose a diffrent username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
      </View>
      <Pressable style={styles.editButton} onPress={saveChanges}>
        <Text style={styles.editButton_text}>Save Changes</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default EditProfile;
