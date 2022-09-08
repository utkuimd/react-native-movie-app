import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Provider} from 'react-redux';
import {store} from './store';
import {setUser} from './store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {DevSettings} from 'react-native';

import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';

import IconFeather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  const [_setUser] = useState('');
  const navigation = useNavigation();
  const user = useSelector(state => state.user);

  const goBottomTab = () => {
    navigation.navigate('BottomTabScreens');
  };

  const removeUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    _setUser(_user);
    console.log(_user);
    await AsyncStorage.removeItem('user');
    DevSettings.reload();
  };

  const userReduxIn = () => {
    return <Text>{user}</Text>;
  };

  return (
    <View>
      <Text onPress={goBottomTab}>Home page</Text>
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

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{headerTitle: 'Sign Up'}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="BottomTabScreens" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

const MainStackNav = createStackNavigator();

const MainStackNavigator = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const isUser = userData ? userData : null;
    dispatch(setUser(isUser));
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainStackNav.Navigator>
      {user ? (
        <>
          <MainStackNav.Screen name="MainStackScreens" component={MainStack} />
        </>
      ) : (
        <>
          <MainStackNav.Screen
            name="LoginScreens"
            component={LoginStack}
            options={{headerShown: false}}
          />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
