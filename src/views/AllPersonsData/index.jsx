import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import {onGetAllHogwartsData} from '../../api/apiFunctions';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

const AllPersonsData = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const user = useContext(UserContext);
    const {name, house, staff} = user;
    const [hogwartsData, setHogwartsData] = useState([]);
    console.log(user, 'aser')
    const getHogwartsData = async () => {
        const data = await onGetAllHogwartsData();
        setHogwartsData(data);
    }
    useEffect(() => {
        getHogwartsData();
    },[])
    useEffect(() =>{

    }, [searchValue])
    return (
        <div className="table-container">
            <h3>Hogwarts Database</h3>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} searchType={(type) => {console.log(type)}} />
            <Table searchValue={searchValue} history={props.history} data={hogwartsData} />
        </div>

    );
}

export default AllPersonsData;