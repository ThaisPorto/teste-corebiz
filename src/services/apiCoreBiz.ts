import axios from 'axios'

const apiCoreBiz = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export default apiCoreBiz