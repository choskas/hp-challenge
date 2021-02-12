import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import {onGetAllHogwartsData} from '../../api/apiFunctions';
import Table from './components/Table';

const StaffView = (props) => {
    const user = useContext(UserContext);
    const {name, house, staff} = user;
    const [hogwartsData, setHogwartsData] = useState([]);
    const getHogwartsData = async () => {
        const data = await onGetAllHogwartsData();
        setHogwartsData(data);
    }
    useEffect(() => {
        getHogwartsData();
    },[])
    let component = <div />
    if(staff === true){
        component = <div className="table-container">
            <h3>Hogwarts Database</h3>
            <Table history={props.history} data={hogwartsData} />
        </div>
    } else {
        props.history.push('/')
    }

    return component;
}

export default StaffView;