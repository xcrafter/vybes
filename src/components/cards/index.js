import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '@helpers/scale';
import { webWeights, human } from 'react-native-typography';

import { CardItem, Thumbnail, Text, Icon, Left, Body } from 'native-base';
import { bold } from 'ansi-colors';

const { width, height } = Dimensions.get('window');

export const Influencer = ({
  name, count, images, bio = '',
}) =>
  (<View style={{ padding: moderateScale(9) }}>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: 'https://urlofseo.com/images/leemarshallavatar200.png' }} />
        <Body style={{ paddingLeft: moderateScale(6) }}>
          <Text style={{ fontSize: name.length > 12 ? moderateScale(11) : moderateScale(14), fontWeight: '600', ...human.bold }}>{name}
          </Text>
          <Text note style={{ fontSize: moderateScale(10), paddingTop: moderateScale(4) }}>
            <Icon type="FontAwesome" name="heart" style={{ fontSize: moderateScale(10) }} /> {count.toString()}
          </Text>
        </Body>
      </Left>
    </CardItem>
    <View style={{ flexDirection: 'row', height: moderateScale(60) }} >
      <View style={{ flex: 9, paddingTop: moderateScale(1) }}>
        <Text style={{
        fontSize: moderateScale(9), fontWeight: '100', paddingRight: moderateScale(8), paddingLeft: moderateScale(7),
        }}
        >
          {bio}
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={{
            ...webWeights.medium,
            textAlign: 'right',
                        fontSize: moderateScale(12),
            color: EStyleSheet.value('$colorPrimary'),
            }}
        >See all >
        </Text>
      </View>
    </View>


    <FlatList
      data={images}
      keyExtractor={item => images.indexOf(item)}
      horizontal
      renderItem={({ item, index }) => (<ImageCard url={item} />)}
    />


  </View>);

export const ImageCard = ({ url }) =>
  (
    <View style={{ width: width / 2, height: width / 2, padding: moderateScale(5) }}>
      <Image
        style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            }}
        source={{ uri: url }}
      />

    </View>

  );

export const ImageCardWithTitle = props =>
  (
    <View style={{
    width: width / 1.5,
    height: width / 1.5,
    padding: moderateScale(5),
    backgroundColor: EStyleSheet.value('$colorTertiary'),
 }}
    >
      <Image
        style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            }}
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
      />

      <Text style={{ fontSize: moderateScale(12) }}>This is a sample text below</Text>
    </View>


  );
