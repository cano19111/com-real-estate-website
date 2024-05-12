import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
	    'x-rapidapi-key': '418826566fmsh72884fbc9bbb73fp1e3c27jsncc2f570f0b79'
        }
    })
    return data
}