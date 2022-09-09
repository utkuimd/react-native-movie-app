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
import {useNavigation} from '@react-navigation/native';
import styles from './SignUp.style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handlePostUser = () => {
    if (password === passwordAgain) {
      // eslint-disable-next-line prettier/prettier
      axios.post('http://10.0.3.2:3000/users', {
          email,
          password,
          passwordAgain,
          username,
        })
        .then(response => {
          if (response.status === 201) {
            setEmail('');
            setPassword('');
            setPasswordAgain('');
            setUsername('');
            console.log('Sign Up Success');
            navigation.goBack();
          }
        });
    } else {
      Alert.alert('Passwords are not same!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create your account!</Text>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <View style={styles.getInformation}>
        <View style={styles.getInformationArea}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
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
      <Pressable style={styles.signUpButton} onPress={handlePostUser}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUp;
