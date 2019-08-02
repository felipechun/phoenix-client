import axios from 'axios';

class AxiosRoutes {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.service = service;
  }

  mainSearch = (searchTerm) => {
    console.log(searchTerm, 'THIS IS THE SEARCH TERM IN AXIOSROUTES');
    return this.service.post('/search', { searchTerm })
    .then(response => response.data)
  }
  
}

export default AxiosRoutes;