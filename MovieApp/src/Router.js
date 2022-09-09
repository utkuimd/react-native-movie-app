import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Provider} from 'react-redux';
import {store} from './store';
import {setUser, setMovieList} from './store';
import {useDispatch, useSelector} from 'react-redux';

import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import Details from './pages/main/details/Details';
import Home from './pages/main/home/Home';
import Search from './pages/main/search/Search';
import Settings from './pages/main/settings/Settings';
import EditProfile from './pages/main/settings/EditProfile';
import ChangeTheme from './pages/main/settings/ChangeTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import IconFeather from 'react-native-vector-icons/Feather';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainStackNav = createStackNavigator();

const MainStackNavigator = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const isUser = userData ? userData : null;
    dispatch(setUser(isUser));
  };

  const getMovies = () => {
    // eslint-disable-next-line prettier/prettier
    const apiRequestLink = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9c4dbbe40978e1aef787c52576339a4a';
    axios
      .get(apiRequestLink, {})
      .then(response => {
        dispatch(setMovieList(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainStackNav.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <MainStackNav.Screen name="MainScreens" component={MainStack} />
        </>
      ) : (
        <>
          <MainStackNav.Screen name="LoginScreens" component={LoginStack} />
        </>
      )}
    </MainStackNav.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTabScreens"
        component={MainBottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DetailScreen" component={Details} />
    </Stack.Navigator>
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

const MainBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <IconFeather
              name="home"
              size={25}
              color={focused ? '#1e90ff' : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={Search}
        options={{
          headerTitle: 'Search',
          headerTitleAlign: 'center',
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <IconFeather
              name="search"
              size={25}
              color={focused ? '#1e90ff' : 'gray'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsScreens"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => (
            <IconFeather
              name="settings"
              size={25}
              color={focused ? '#1e90ff' : 'gray'}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={Settings}
        options={{headerTitle: 'Settings', headerTitleAlign: 'center'}}
      />
      <Stack.Screen name="EditProfileScreen" component={EditProfile} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeTheme} />
    </Stack.Navigator>
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
