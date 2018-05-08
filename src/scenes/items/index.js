import React, { Component } from 'react';
import { View, Image, Text, StatusBar, Dimensions } from 'react-native';
import { moderateScale } from '@helpers/scale';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ItemTitle, AuthorTitle, PriceTtile, StockTitle } from '../../components/labels';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { systemWeights } from 'react-native-typography';
import Loading from '@components/loadingScreen';
import { getItemDetails } from '../../api/basics';

import { Button } from 'native-base';
const { width, height } = Dimensions.get('window');
export default class Items extends Component {
  constructor() {
    super();
    this.state = {
      pic: '',
      stock: '',
      description: '',
      price: '',
      author: '',
      title: '',
      isLoading: true,

    };
    this.getItemDetails = this.getItemDetails.bind(this);
  }
  componentWillMount() {
    this.getItemDetails(this.props.navigation.state.params.id);
  }
  getItemDetails(id) {
    this.setState({
      isLoading: true,
    });
    getItemDetails(id).then((res) => {
      const {
        pic, stock, price, description, author, title,
      } = res;
      this.setState({
        pic, stock, price, description, title, author, isLoading: false,
      });
    }).catch((ex) => {
      this.setState({
        isLoading: false,
      });
    });
  }
  render() {
    const {
      pic, stock, price, description, author, title,
    } = this.state;
    return this.state.isLoading ? (<Loading />) : (

      <ParallaxScrollView
        backgroundColor={EStyleSheet.value('$colorPrimary')}
        contentBackgroundColor={EStyleSheet.value('$colorSecondary')}
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <View style={{
          height: height / 2, width,
          }}
          >
            <Image
              style={{
            flex: 1,
            width,
            height: height / 2,
            resizeMode: 'cover',
            }}
              source={{ uri: pic }}
            />
          </View>
      )}
      >
        <View style={{
 height: height / 2, padding: moderateScale(12), paddingTop: moderateScale(15), paddingRight: moderateScale(12),
}}
        >
          <StatusBar
            backgroundColor={EStyleSheet.value('$colorPrimary')}
            barStyle="dark-content"
          />
          <ItemTitle text={title} />

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: moderateScale(10) }}>by</Text>
            <AuthorTitle text={author} />
          </View>

          <View style={{ flexDirection: 'row', marginTop: moderateScale(16) }}>
            <PriceTtile text={`$S${price}`} textStyle={{ paddingTop: moderateScale(50), alignItems: 'center' }} />
            <StockTitle text={`Only ${stock} left`} />
          </View>

          <Text style={{
 marginTop: moderateScale(12), fontSize: moderateScale(10), lineHeight: 15, ...systemWeights.regular,
}}
          >
            {description}
          </Text>

        </View>
      </ParallaxScrollView>


    );
  }
}
