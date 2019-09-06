import React, { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../auth/TokenContext';
import * as api from '../api';

const VacancyList = props => {
    const { token } = useContext(TokenContext);
    const [] = useState([]);

    useEffect(() => {
        api.getVacancies(token).then(console.log);
    }, [!!token]);

    return (token ? token : 'anonymous');
};

export default VacancyList;
