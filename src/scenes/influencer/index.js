import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StatusBar, Dimensions, FlatList } from 'react-native';
import { moderateScale } from '@helpers/scale';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ImageCardWithTitle } from '../../components/cards';
import ImageOverlay from 'react-native-image-overlay';
import styles from './style';
import { Icon } from 'native-base';
import { getMemberDetails, getInfluencerDetails } from '../../api/basics';
import { excerpt } from '../../helpers/text';

const { width, height } = Dimensions.get('window');
export default class Influencers extends Component {
  constructor() {
    super();
    this.state = {
      memberDetails: {
        name: '', email: '', userName: '', coverPicture: '', profilePicture: '', count: '',
      },
      imagesList: [],
      isLoading: true,
    };
    this.getDetails = this.getDetails.bind(this);
  }
  componentWillMount() {
    this.getDetails();
  }
  getDetails() {
    this.setState({
      isLoading: true,
    });
    getMemberDetails(this.props.navigation.state.params.id).then((res) => {
      this.setState({ memberDetails: res });
      getInfluencerDetails(25).then((resp) => {
        this.setState({ imagesList: resp });
      }).catch((ex) => {
        this.setState({
          isLoading: false,
        });
      });
    }).catch((ex) => {
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    const { memberDetails } = this.state;
    return (
      <ScrollView style={{ paddingTop: moderateScale(18), backgroundColor: '#fff', height }}>
        <StatusBar
          backgroundColor={EStyleSheet.value('colorPrimary')}
          barStyle="dark-content"
        />

        <View style={{ width, height: height / 2 }}>
          <ImageOverlay
            source={{ uri: memberDetails.coverPicture }}
            height={0.45 * height}
            contentPosition="center"
          >
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
              <Image style={styles.avatar} source={{ uri: memberDetails.profilePicture }} />
              <Text style={styles.name}>{memberDetails.name}</Text>
              <Text note style={{ fontSize: moderateScale(10), paddingTop: moderateScale(4), color: '#fff' }}>
                <Icon type="FontAwesome" name="heart" style={{ fontSize: moderateScale(10), color: '#ff' }} /> {memberDetails.count}
              </Text>
            </View>
          </ImageOverlay>
        </View>


        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.imagesList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (<ImageCardWithTitle
            onPress={() => this.props.navigation.navigate('items', { id: item.id })}
            imageName={item.image}
            title={excerpt(item.desc, 30)}
          />)}
        />


      </ScrollView>
    );
  }
}
