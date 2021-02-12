const {Router, response} = require('express');
const axios = require('axios');
const router = Router();

router.post('/login',async(req, res, next) => {
    try{
    const response = await axios.post('http://ec2-52-37-61-68.us-west-2.compute.amazonaws.com:1234/api/v1/challenge/login',
    {user: req.body.email, password: req.body.password}
    )
    console.log(response, 'ola')
    res.status(200, 'All is fine!')
    // console.log(response, 'response <<<<<')
    // return response;
    } catch(error) {
        console.log(error, '<<<< ')
        res.status(500, error)
    }
})

module.exports = router;