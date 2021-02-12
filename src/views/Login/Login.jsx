import React, {useState, useContext} from 'react';
import Form from './components/Form'
import {onLogin} from '../../api/apiFunctions';
import {UserContext} from '../../context/UserContext';
import isEmpty from 'lodash/isEmpty';

const Login = (props) => {
    const user = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(<div>
        <Form setEmail={setEmail} setPassword={setPassword} onClickSubmit={async()=>{
            try{
            const response = await onLogin(email, password)
            if(isEmpty(response) === false){
            const {name, house, staff} = response.data;
            user.setName(name)
            user.setHouse(house)
            user.setStaff(staff)
            if(staff === true){
                props.history.push('/staff')
            } else {
                props.history.push('/student')
            }
            }
            } catch (err) {
                // mensaje de erorr en err
                console.log(err)
                throw err;
            }
        }} />
    </div>)
}

export default Login;