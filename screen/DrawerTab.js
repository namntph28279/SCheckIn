import { createDrawerNavigator } from '@react-navigation/drawer';
import { Camera } from './Camera';
import { FormController } from './Controller';
import { Home } from './Home';
import { Search } from './Search';

const Drawer = createDrawerNavigator();

export function DrawerTab() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="AlertOption" component={Home} />
            <Drawer.Screen name="DateTimePicker" component={Search} />
            <Drawer.Screen name="Google map" component={Camera} />
            <Drawer.Screen name="React Hook Form" component={FormController} />
        </Drawer.Navigator>
    );
}
