import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Recharge from './pages/Recharge';
import RechargeNew from './pages/RechargeNew';
import RechargeContact from "./pages/RechargeContact";
import Test from './pages/Test';

const Routes = createAppContainer(
    createSwitchNavigator({
        //Test,        
    	Welcome,
        Login,
        ForgotPassword,
        Signup,
		Main,
		Recharge,
		RechargeNew,
		RechargeContact
    })
);

export default Routes;
