import axios from '../axios';

export default {
  getPets: () => {
    console.log('api url', process.env.API_URL)
    return axios.get('/pets')
      .then(({ data }) => {
        console.log('teste api', data)
        return data
      });
  },
  registerPet: pet => {
    return axios.post('/pet-register', pet);
  }
}