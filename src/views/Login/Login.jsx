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
            user.setHistory(props.history);
            if(staff === true){
                user.setImg('https://files.mormonsud.org/wp-content/uploads/2019/05/severus-snape.jpg')
            } else {
                user.setImg('https://tiempodigital.mx/wp-content/uploads/2020/07/harry-potter.jpeg')
            }
            props.history.push('/data-base')
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