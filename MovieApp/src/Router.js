import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Provider} from 'react-redux';
import {store} from './store';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from './store';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [username, setUsername] = useState('');
  const [emailIn, setEmailIn] = useState('');
  const [passwordIn, setPasswordIn] = useState('');
  const [_user, _setUser] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const goBottomTab = () => {
    navigation.navigate('BottomTabScreens');
  };

  const handleGetUser = () => {
    /*axios.get('http://10.0.3.2:3000/users', {}).then(response => {
      console.log('response: ', response);
    });*/
    fetch('http://10.0.3.2:3000/users')
      .then(async result => {
        const data = await result.json();
        const chosenUser = data.filter(user => user.email === emailIn);
        console.log(chosenUser);
        console.log(chosenUser[0].email);
        console.log(chosenUser[0].password);
        console.log(emailIn);
        console.log(passwordIn);
        // eslint-disable-next-line prettier/prettier
        if (chosenUser[0].email === emailIn && chosenUser[0].password === passwordIn) {
          setEmailIn('');
          setPasswordIn('');

          await AsyncStorage.setItem('user', JSON.stringify(chosenUser));

          dispatch(setUser(JSON.stringify(chosenUser)));
          console.log(user);

          console.log('Sign In success!');
        } else {
          console.log('bir sıkıntı var');
        }
      })
      .catch(function (error) {
        // eslint-disable-next-line prettier/prettier
        console.log('There has been a problem with your fetch operation: ' + error.message,);
        throw error;
      });
  };

  const handlePostUser = () => {
    axios
      .post('http://10.0.3.2:3000/users', {
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
          console.log('Success');
        }
      });
  };

  const removeUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    _setUser(_user);
    console.log(_user);
    await AsyncStorage.removeItem('user');
  };

  const userReduxIn = () => {
    return <Text>{user}</Text>;
  };

  return (
    <View>
      <Text onPress={goBottomTab}>Home page</Text>
      <View style={{backgroundColor: 'orange'}}>
        <Text>SİGN UP SECTİON</Text>
        <TextInput
          placeholder="please enter your email..."
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="please enter your password..."
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          placeholder="please enter your password again..."
          onChangeText={setPasswordAgain}
          value={passwordAgain}
        />
        <TextInput
          placeholder="username gir..."
          onChangeText={setUsername}
          value={username}
        />
        <Text onPress={handlePostUser}>Post user</Text>
      </View>
      <View style={{backgroundColor: 'pink'}}>
        <Text>SİGN IN SECTİON</Text>
        <TextInput
          placeholder="please enter your email..."
          onChangeText={setEmailIn}
          value={emailIn}
        />
        <TextInput
          placeholder="please enter your password..."
          onChangeText={setPasswordIn}
          value={passwordIn}
        />
        <Text onPress={handleGetUser}>Login</Text>
      </View>
      <View style={{backgroundColor: 'green'}}>
        <Text>AsyncStorage Section</Text>
        <Text onPress={removeUser}>Remove User</Text>
      </View>
      <View style={{backgroundColor: 'aqua'}}>
        <Text>REDUX TEST SECTİON</Text>
        <Text>{userReduxIn()}</Text>
      </View>
      <IconFeather name="home" size={25} />
    </View>
  );
};

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="EmptyScreen1" component={Empty} />
      <BottomTab.Screen name="EmptyScreen2" component={Empty} />
      <BottomTab.Screen name="EmptyScreen3" component={Empty} />
    </BottomTab.Navigator>
  );
};

const Empty = () => {
  return (
    <View>
      <Text>Empty page</Text>
      <IconFeather name="plus" size={25} />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen name="BottomTabScreens" component={BottomTabNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
