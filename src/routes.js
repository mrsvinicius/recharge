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

/*
const Routes = createAppContainer(
    createStackNavigator({      
    Welcome,
    Login,
    ForgotPassword,
    Signup,
    Main,
    Recharge,
    RechargeNew,
    RechargeContact
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        height: 30,
        backgroundColor: '#FFF',
        borderBottomColor: "transparent",
        elevation: 0,
      },
      headerBackImage: <Image source={require('./assets/images/back.png')} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 20,
        paddingRight: 20,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 20,
      },
    }
  })
);

export default Routes;
*/