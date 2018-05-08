import Config from 'react-native-config';
import { create } from 'apisauce';
import _ from 'lodash';

const ApiUrl = Config.API_URL;

const api = create({
  baseURL: ApiUrl,
});

export const getInfluencers = () => new Promise((resolve, reject) => {
  api.get('/listing').then((res) => {
    if (res.status == 200) {
      const result = res.data || [];
      const finalResult = [];
      if (result.length > 0) {
        result.forEach((element) => {
          if (element.user) {
            const user = {};
            if (element.user.data.instagram) {
              user.title = element.user.data.instagram.username;
              user.counts = element.user.data.instagram.counts.followed_by;
              user.bio = element.user.data.instagram.bio;
              user.pic = element.user.data.profile_picture;
              user.id = element.user.id;
            }
            const images = [];
            element.items.forEach((element) => {
              if (element.images.length > 0) {
                const imageName = `${Config.S3_URL}${element.images[0].name}`;
                images.push({ id: element.id, imageName });
              }
            });

            finalResult.push({
              user, images,
            });
          }
        });
        resolve(finalResult);
      } else {
        resolve([]);
      }
    }
  }).catch((ex) => {
    reject(ex);
  });
});

export const getMemberDetails = id => new Promise((resolve, reject) => {
  const endPoint = `/members/${id}`;
  api.get(endPoint).then((res) => {
    if (res.status == 200) {
      const result = res.data.data || {};
      if (!_.isEmpty(result)) {
        const finalData = {};
        finalData.coverPicture = result.cover_picture;
        finalData.count = result.instagram.counts.followed_by;

        finalData.profilePicture = result.profile_picture;
        finalData.email = result.email_address;

        finalData.name = result.instagram.full_name;
        finalData.userName = result.instagram.username;
        console.log(finalData);

        resolve(finalData);
      }
    }
  }).catch((ex) => {
    reject(ex);
  });
});


export const getInfluencerDetails = id => new Promise((resolve, reject) => {
  const endPoint = `/listing/items?user_id=${id}`;
  api.get(endPoint).then((res) => {
    if (res.status == 200) {
      const result = res.data || [];
      const finalResult = [];
      result.forEach((element) => {
        finalResult.push({
          desc: element.desc,
          image: `${Config.S3_URL}${element.images[0].name}`,
          id: element.id,
        });
      });
      resolve(finalResult);
    }
  }).catch((ex) => {
    reject(ex);
  });
});


export const getItemDetails = id => new Promise((resolve, reject) => {
  const endPoint = `/listing/items/${id}`;

  api.get(endPoint).then((res) => {
    if (res.status == 200) {
      const result = res.data || {};
      if (!_.isEmpty(result)) {
        const finalResult = {};
        console.log(result);
        finalResult.pic = `${Config.S3_URL}${result.images[0].name}`;

        finalResult.stock = result.qty;
        finalResult.price = result.price;
        finalResult.description = result.desc;
        finalResult.author = result.user.data.instagram.username;
        finalResult.title = result.name;

        resolve(finalResult);
      }
    }
  }).catch((ex) => {
    reject(ex);
  });
});
