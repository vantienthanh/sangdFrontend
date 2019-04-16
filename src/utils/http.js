import axios from 'axios'

const axiosCus = axios.create({
  baseURL: 'http://sangd.local/api'
})

export default {
  axiosCus
}
