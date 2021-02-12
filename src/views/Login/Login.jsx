import React, {useState, useContext} from 'react';
import Form from './components/Form'
import {onLogin} from '../../api/apiFunctions';
import {UserContext} from '../../context/UserContext';
import isEmpty from 'lodash/isEmpty';

const Login = (props) => {
    const user = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(user, 'usuarios')
    return(<div>
        <Form setEmail={setEmail} setPassword={setPassword} onClickSubmit={async()=>{
            try{
            const response = await onLogin(email, password)
            if(isEmpty(response) === false){
            user.setName(response.name)
            user.setHouse(response.house)
            user.setStaff(response.staff)
            }
            alert(response)
            } catch (err) {
                throw err;
            }
        }} />
    </div>)
}

export default Login;