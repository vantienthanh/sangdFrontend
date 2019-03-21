import axios from 'axios'

const axiosCus = axios.create({
  baseURL: 'http://vantienthanh.local/api/'
})

export default {
  axiosCus
}
