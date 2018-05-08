import Config from 'react-native-config'
import { create } from 'apisauce';
const ApiUrl = Config.API_URL

const api =  create({
    baseURL: API_URL
  });

export const getInfluencers = () => new Promise((resolve,reject)=>{
    api.get('/listing').then((res) => {
        if (res.status == 200) {
         resolve(res.data || [])
        } 
    }).catch(ex=>{
        reject(ex)
    })
}) 

export const getInfluencerDetails = (id) => new Promise((resolve,reject)=>{
    const endPoint = `/members/${id}`
    api.get(endPoint).then((res) => {
        if (res.status == 200) {
         resolve(res.data || [])
        } 
    }).catch(ex=>{
        reject(ex)
    })
}) 


export const getInfluencerDetails = (id) => new Promise((resolve,reject)=>{
    const endPoint = `/lisiting/items?user_id=${id}`
    api.get(endPoint).then((res) =>{
        if (res.status == 200) {
         resolve(res.data || [])
        } 
    }).catch(ex=>{
        reject(ex)
    })
}) 


export const getItemDetails = (id) => new Promise((resolve,reject)=>{
    const endPoint = `/lisiting/items/${id}`
    api.get(endPoint).then((res) => {
        if (res.status == 200) {
         resolve(res.data || [])
        } 
    }).catch(ex=>{
        reject(ex)
    })
}) 