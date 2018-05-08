import { StackNavigator } from 'react-navigation';
import Home from '@scenes/home';
import Influencer from '@scenes/influencer';
import Items from '@scenes/items';
import theme from '@config/theme';
import Loading from '@components/loadingScreen';

const homeRouter = StackNavigator({
  home: Home,
  influencer: Influencer,
  items: Items,
  loading: Loading,
}, {
  initialRouteName: 'home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'transparent',
      right: 0,
      left: 0,
      top: 0,
      position: 'absolute',
      borderBottomWidth: 0,
    },
  },
  lazy: true,
  animationEnabled: true,


});

export default homeRouter;
