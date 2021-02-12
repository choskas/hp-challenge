import axios from 'axios';

export const onLogin = async (email, password) => {
    try{
    const response = await axios.post('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',{
        email,
        password
    })
    return response;
} catch (err) {
    console.log(err)
}
}