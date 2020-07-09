import axios from 'axios'

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers:{
        'user-key':'b8a2798502063a5b7141b12fd528f5a2'
    }
})