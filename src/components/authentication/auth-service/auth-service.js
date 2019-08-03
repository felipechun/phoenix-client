import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  companySignup = (name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email) => {
    return this.service.post('/create-company', {name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => {
      return response.data
    })
  }
  
  logout = () => {
    return this.service.get('/logout', {})
    .then(response => response.data)
  }

  handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return this.service.post('/upload', theFile)
      .then(res => res.data);
  }

}

export default AuthService;