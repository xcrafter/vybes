import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StatusBar, Dimensions, FlatList,Platform } from 'react-native';
import { moderateScale } from '@helpers/scale';
import EStyleSheet from 'react-native-extended-stylesheet';
import HeaderLabel from '../../components/labels';
import { Influencer } from '../../components/cards';
import { getInfluencers } from '../../api/basics';
import Loading from '@components/loadingScreen';
import { excerpt } from '../../helpers/text';

const { width, height } = Dimensions.get('window');
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      influencers: [],
    };
    this.getInfluencerData = this.getInfluencerData.bind(this);
  }
  componentWillMount() {
    this.getInfluencerData();
  }
  getInfluencerData() {
    this.setState({
      isLoading: true,
    });
    getInfluencers().then((result) => {
      console.log('result', result);
      this.setState({
        influencers: result,
        isLoading: false,
      });
    }).catch((ex) => {
      this.setState({
        isLoading: false,
      });
    });
  }
  render() {
    const { state } = this;
    return state.isLoading ?
      (<Loading />)
      :
      (
        <View style={{ paddingTop: Platform.OS ==='ios'? moderateScale(18) : 0, backgroundColor: '#fff', height }}>
          <StatusBar
            backgroundColor={EStyleSheet.value('$colorPrimary')}
            barStyle="dark-content"
          />
          <View style={{
          backgroundColor: EStyleSheet.value('$colorTertiary'),
          height: moderateScale(50),
          alignItems: 'center',
          paddingTop: moderateScale(7),
          paddingBottom: moderateScale(10),
        }}
          >
            <HeaderLabel text="Explore" />
          </View>

          <FlatList
            data={state.influencers}
            onRefresh={this.getInfluencerData}
            refreshing={this.state.isLoading}
            keyExtractor={item => item.user.id.toString()}
            renderItem={({ item, index }) => (<Influencer
              key={index}
              navigation={this.props.navigation}
              onPressCard={() => this.props.navigation.navigate('influencer', { id: item.user.id })}
              name={item.user.title ? item.user.title.toUpperCase() : ''}
              count={item.user.counts}
              images={item.images}
              pic={item.user.pic}
              bio={excerpt(item.user.bio, 50)}
            />)}
          />


        </View>
      );
  }
}
