import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '@helpers/scale';
import { systemWeights } from 'react-native-typography';

const style = EStyleSheet.create({
  textStyle: {
    ...systemWeights.semiBold,
    color: '$darkText',
    fontSize: moderateScale(18),
    fontWeight: '600',
    paddingBottom: moderateScale(7),
    borderBottomWidth: 3,
    flexWrap: 'wrap',
    paddingLeft: moderateScale(6),
    paddingRight: moderateScale(6),
    borderBottomColor: '#000',
    textAlign: 'center',
  },
  titelText: {
    ...systemWeights.semiBold,
    color: '$darkText',
    fontSize: moderateScale(18),
    fontWeight: '600',
    paddingBottom: moderateScale(7),
    flexWrap: 'wrap',
    paddingRight: moderateScale(6),
    textAlign: 'left',
  },
  authorTitle: {
    ...systemWeights.semiBold,
    color: '$colorPrimary',
    fontSize: moderateScale(10),
    paddingLeft: moderateScale(4),
  },
  priceText: {
    ...systemWeights.semiBold,
    color: '$colorPrimary',
    paddingLeft: moderateScale(4),
    fontSize: moderateScale(14),
  },
  stocksText: {
    ...systemWeights.semiBold,
    backgroundColor: '$colorPrimary',
    padding: moderateScale(3),
    paddingLeft: moderateScale(7),
    paddingRight: moderateScale(7),
    fontSize: moderateScale(13),
    color: '#fff',
    marginLeft: moderateScale(18),
  },
});


const HeaderLabel = ({ textStyle = {}, text }) =>
  (

    <View style={{ borderBottomColor: EStyleSheet.value('$colorPrimary'), borderBottomWidth: 4 }}>
      <Text
        style={[style.textStyle, ...textStyle]}
      >
        {text}
      </Text>
    </View>);

export const ItemTitle = ({ textStyle = {}, text }) =>
  (

    <View>
      <Text
        style={[style.titelText, ...textStyle]}
      >
        {text.toUpperCase()}
      </Text>
    </View>);


export const AuthorTitle = ({ textStyle = {}, text }) =>
  (

    <View>
      <Text
        style={[style.authorTitle, ...textStyle]}
      >
        {text}
      </Text>
    </View>);

export const PriceTtile = ({ textStyle = {}, text }) =>
  (

    <View>
      <Text
        style={[style.priceText, ...textStyle]}
      >
        {text}
      </Text>
    </View>);

export const StockTitle = ({ textStyle = {}, text }) =>
  (

    <View>
      <Text
        style={[style.stocksText, ...textStyle]}
      >
        {text}
      </Text>
    </View>);

export default HeaderLabel;
