import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../Telas/Menu";
import CustomDrawer from "../Componentes/DrawerContent";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: 'front'
            }}
            drawerContent={() => <CustomDrawer />}
        >
            <Drawer.Screen name="Menu Principal" component={Menu} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;