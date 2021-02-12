import axios from 'axios';

export const onLogin = async (email, password) => {
    try{
    const response = await axios.post('http://localhost:3001/login',{
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