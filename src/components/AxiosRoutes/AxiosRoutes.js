import axios from 'axios';

class AxiosRoutes {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:9000/api',
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