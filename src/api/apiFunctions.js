import axios from 'axios';

export const onLogin = async (email, password) => {
    const client = axios.create({
        // withCredentials: true,
        auth: {
            username:  email,
            password,
        },
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
        }
    })
    try{
        // const response = fetch('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login', {
        //     method: 'POST',
        //     body: {email, password},
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       'Accept': 'application/json',
        //       'Access-Control-Allow-Origin': true,
        //     },
        //   })
    const response = await client.post('http://localhost:3001/login',{
        email,
        password,
    })
    return response;
} catch (err) {
    console.log(err)
}
}