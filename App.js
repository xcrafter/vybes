import { StackNavigator } from 'react-navigation';
import Home from '@scenes/home';
import Influencer from '@scenes/influencer';
import Items from '@scenes/items';
import theme from '@config/theme';

const homeRouter = StackNavigator({
  home: Home,
  influencer: Influencer,
  items: Items,
}, {
  initialRouteName: 'items',
  navigationOptions: {
    header: null,
  },
  lazy: true,
  animationEnabled: true,


});

export default homeRouter;
