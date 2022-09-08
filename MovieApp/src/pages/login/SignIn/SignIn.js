import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {DevSettings} from 'react-native';
import styles from './SignIn.style';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleGetUser = () => {
    axios.get('http://10.0.3.2:3000/users', {}).then(response => {
      const chosenUser = response.data.filter(user => user.email === email);
      // eslint-disable-next-line prettier/prettier
      if (chosenUser[0].email === email && chosenUser[0].password === password) {
        setEmail('');
        setPassword('');
        AsyncStorage.setItem('user', JSON.stringify(chosenUser));
        console.log('Sign In Success');
        DevSettings.reload();
      } else {
        Alert.alert('Please check your email and password');
      }
    });
  };
  const gotoSignIn = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Movie App!</Text>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <Text onPress={gotoSignIn} style={styles.gotoSignIn}>
        Don't you have any account? Create one!
      </Text>
      <Pressable style={styles.signInButton} onPress={handleGetUser}>
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignIn;
