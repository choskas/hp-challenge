import axios from 'axios';

export const onLogin = async (email, password) => {
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
    const response = await axios.post('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',{
        email,
        password
    },{'Access-Control-Allow-Origin': '*'})
    return response;
} catch (err) {
    console.log(err)
}
}