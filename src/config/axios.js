import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'http://localhost:3085'
})

export default axios