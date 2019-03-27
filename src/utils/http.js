import axios from 'axios'

const axiosCus = axios.create({
  baseURL: 'http://sangd.local/index.php/api'
})

export default {
  axiosCus
}
