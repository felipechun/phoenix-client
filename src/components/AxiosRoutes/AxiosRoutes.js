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
    return this.service.post('/search', { searchTerm })
    .then(response => response.data)
  }
  
}

export default AxiosRoutes;