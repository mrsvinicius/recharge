import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Recharge from './pages/Recharge';
import RechargeNew from './pages/RechargeNew';
import RechargeContact from "./pages/RechargeContact";

const Routes = createAppContainer(
    createSwitchNavigator({
    	Welcome,
        Login,
        SignUp,
		Main,
		Recharge,
		RechargeNew,
		RechargeContact
    })
);

export default Routes;
