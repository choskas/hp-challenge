import React, {useContext} from 'react';
import {DetailContext} from '../../context/DetailContext';

const PersonDetail = (props) => {
    const person = useContext(DetailContext);
    console.log(person, '>>>>>>')
    return(<div>
        dertail
    </div>)

}

export default PersonDetail;