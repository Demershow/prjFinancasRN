import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/new';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor: '#171717',
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'bold',
            },
            activeTintColor: '#fff',
            activeBackgroundColor: '#00b94a',
            inactiveBackgroundColor: '#000',
            inactiveTintColor: '#ddd',
            itemStyle:{
                marginVertical: 5,
            }
        }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Registrar" component={New}/>
        <AppDrawer.Screen name="Perfil" component={Profile}/>
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
