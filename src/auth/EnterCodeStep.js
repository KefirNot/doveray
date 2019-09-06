import React, { useContext } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import { TokenContext } from './TokenContext';
import * as api from '../api';

const EnterCodeStep = (props) => {
    const {
        phone,
        code,
        setCode,
        setError
    } = props;

    const { setToken } = useContext(TokenContext);

    const enterCode = () => api.enterCode(phone, code)
        .then(response => setToken(response.data.token))
        .catch(setError);

    return (
        <>
            <Helmet>
                <title>Auth: enter code</title>
            </Helmet>
            <div>
                <Input
                    value={code}
                    onChange={event => setCode(event.target.value)}
                />
                <Button onClick={enterCode}>go</Button>
            </div>
        </>
    );
};

export default EnterCodeStep;
