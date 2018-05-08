import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '@helpers/scale';
import { systemWeights } from 'react-native-typography';

export default EStyleSheet.create({

  name: {
    textAlign: 'center',
    color: '#fff',
    marginTop: moderateScale(16),
    fontSize: moderateScale(15),
    ...systemWeights.regular,
    fontWeight: '700',
  },
  avatar: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(35),
    alignItems: 'center',
  },
  location: {
    textAlign: 'center',
    color: '#fff',

  },

});

