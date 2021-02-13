import axios from 'axios';

const loginURL = window.location.host.indexOf('localhost') > -1 ? 'http://localhost:3001/login' : 'https://hp-challenge-back.herokuapp.com/login'
export const onLogin = async (email, password) => {
    try{
    const response = await axios.post(loginURL,{
        email,
        password,
    })
    return response;
} catch (err) {
    throw err.response.data.message;
}
}

export const onGetAllHogwartsData = async() => {
    try {
        const response = await axios.get('http://hp-api.herokuapp.com/api/characters')
        return response.data;
    } catch (err) {
        throw err;
    }
}