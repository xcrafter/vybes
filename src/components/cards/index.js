import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '@helpers/scale';
import { webWeights, human } from 'react-native-typography';

import { CardItem, Thumbnail, Text, Icon, Left, Body, Item } from 'native-base';
import { bold } from 'ansi-colors';

const { width, height } = Dimensions.get('window');

export const Influencer = ({
  name, count, images, bio = '', pic, onPressCard,navigation
}) =>
  (<TouchableOpacity style={{ padding: moderateScale(9) }} onPress={() => onPressCard()} >
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: pic }} />
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
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (<ImageCard url={item.imageName} onPress={() => navigation.navigate('items', { id: item.id })} />)}
    />


  </TouchableOpacity>);

export const ImageCard = ({ url, onPress }) =>
  (
    <TouchableOpacity onPress={() => onPress()} style={{ width: width / 2, height: width / 2, padding: moderateScale(5) }}>
      <Image
        style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            }}
        source={{ uri: url }}
      />

    </TouchableOpacity>

  );

export const ImageCardWithTitle = props =>
  (
    <TouchableOpacity
      style={{
    width: width / 1.5,
    height: width / 1.5,
    margin: moderateScale(7),
    padding: moderateScale(5),
    backgroundColor: EStyleSheet.value('$colorTertiary'),
 }}
      onPress={() => props.onPress()}
    >
      <Image
        style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            }}
        source={{ uri: props.imageName }}
      />

      <Text style={{ fontSize: moderateScale(12) }}>{props.title}</Text>
    </TouchableOpacity>


  );
