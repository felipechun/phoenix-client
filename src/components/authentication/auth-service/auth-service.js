import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password, role) => {
    return this.service.post('/signup', {username, password, role})
    .then(response => response.data)
  }

  companySignup = (name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email, cep) => {
    return this.service.post('/create-company', {name, razaosocial, address, latitude, longitude, speciality, phone, cnpj, email, cep})
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

  updateUserDetails (name, address, city, cep, cpf, userId) {
    return this.service.put(`/profile/edit/${userId}`, { name, address, city, cep, cpf})
    .then(response => {
      return response.data
    })
  }

  getCompanies = () => {
    return this.service.get('/companies/all')
    .then(response => {
      return response.data
    })
  }

  getAllProducts = () => {
    return this.service.get('/products/all')
    .then(response => {
      return response.data
    })
  }

  getToStore = () => {
    return this.service.get('/status-products/toStore')
    .then(response => {
      return response.data
    })
  }

  cartCheckout = (products, total) => {
    return this.service.post('/cart', {products, total})
    .then(response => {
      return response.data
    })
  }

  populateProducts = () => {
    return this.service.get('/client-products')
    .then(response => {
      return response.data
    })
  }

  getMyPurchases = () => {
    return this.service.get('/myPurchases')
    .then(response => {
      return response.data
    })
  }

  handleUpload (theFile) {
    return this.service.post('/upload', theFile)
      .then(res => res.data);
  }

  createProduct (
    name,
    statusProduct,
    categories,
    path,
    brand,
    model,
    starterPrice,
    clientDescription,
    imageUrl,
    idCompany,
  ) {
    return this.service.post('/new-product', {
    name,
    statusProduct,
    categories,
    path,
    brand,
    model,
    starterPrice,
    clientDescription,
    imageUrl,
    idCompany,
    })
      .then(res => res.data)
  }

  updateToFirstResponse (status, responsePrice, companyDescription, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      responsePrice,
      companyDescription,
      productId,
    })
      .then( res => res.data)
  }

  updateToRepair (status, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      productId,
    })
      .then(res => res.data)
  }

  updateToOrderRepair (status, repairPrice, repairDescription, model, specs, brand, repairImageUrl, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      repairPrice,
      repairDescription,
      model,
      specs,
      brand,
      repairImageUrl,
      productId,
    })
      .then(res => res.data)
  }

  updateRepairYesOrNo (status, repairYesNo, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      repairYesNo,
      productId,
    })
      .then(res => res.data)
  }

  updateSendToCompany (status, finalStatusProduct, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      finalStatusProduct,
      productId,
    })
      .then(res => res.data)
  }

  updateSendToStore (status, finalName, onSale, sellingPrice, totalPrice, comission, finalDescription, productId) {
    return this.service.put(`/product-status/${productId}`, {
      status,
      finalName,
      onSale,
      sellingPrice,
      totalPrice,
      comission,
      finalDescription,
      productId,
    })
      .then(res => res.data)
  }



  updateProductStatus (
    productId,
    finalName,
    status,
    finalStatusProduct,
    brand,
    model,
    specs,
    starterPrice,
    responsePrice,
    repairPrice,
    sellingPrice,
    comission,
    totalPrice,
    repairDescription,
    companyDescription,
    finalDescription,
    onSale,
    repairImageUrl,
    repairYesNo
  ) {
    return this.service.put(`/product-status/${productId}`, {
      finalName,
      status,
      finalStatusProduct,
      brand,
      model,
      specs,
      starterPrice,
      responsePrice,
      repairPrice,
      sellingPrice,
      comission,
      totalPrice,
      repairDescription,
      companyDescription,
      finalDescription,
      onSale,
      repairImageUrl,
      repairYesNo
    })
      .then(res => res.data)
  }

  // get specific products from the server
  getSpecific = (request) => {
    return this.service.get(`/categorie/${request}`)
    .then(response => {
      return response.data
    })
  }

  // get user cart
  getCart = () => {
    return this.service.get(`/myCart`)
    .then(response => {
      return response.data
    })
  }
  // edit user cart
  editCart = (request, status) => {
    return this.service.put(`/cart-edit/${request}`, { status })
    .then(response => {
      return response.data
    })
  }

  getCart = (request) => {
    return this.service.delete(`/delete-cart/${request}`)
    .then(response => {
      return response.data
    })
  }
}

export default AuthService;