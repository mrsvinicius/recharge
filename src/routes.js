import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

const Routes = createAppContainer(
    createSwitchNavigator({
    	Welcome,
        Login,
        SignUp,
        Main
    })
);

export default Routes;
