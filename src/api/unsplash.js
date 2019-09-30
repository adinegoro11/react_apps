import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4e32efa4909930498766c4998aee5035bedece007413bed3fa267cbf8d8e6e60'
    }
});