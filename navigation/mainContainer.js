import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// screens here
import HomeScreen from './screens/homeScreen'
import BookScreen from './screens/bookScreen'
import MassScreen from './screens/massScreen'
import AboutUsScreen from './screens/aboutUsScreen'

// screen names
const homeName = 'Home'
const bookName = 'Book'
const massName = 'Mass'
const aboutUsName = 'About Us'

const Tab = createBottomTabNavigator()

const MainContainer = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let rn = route.name

                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } 
                    else if (rn === bookName ) {
                        iconName = focused ? 'book' : 'book-outline'
                    }
                    else if (rn === massName ) {
                        iconName = focused ? 'videocam' : 'videocam-outline'
                    }
                    else if (rn === aboutUsName ) {
                        iconName = focused ? 'people' : 'people-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                activeTintColor: 'lightblue',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 20, height: 70 }
            })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={bookName} component={BookScreen} />
                <Tab.Screen name={massName} component={MassScreen} />
                <Tab.Screen name={aboutUsName} component={AboutUsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer