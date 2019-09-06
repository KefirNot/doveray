import React from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import * as api from '../api';

const EnterPhoneStep = (props) => {
    const {
        setCode,
        phone, setPhone,
        nextStep,
        setError,
    } = props;

    const enterPhone = () => api.enterPhone(phone)
        .then(response => {
            setCode(response.data);
            nextStep();
        })
        .catch(setError);

    return (
        <>
            <Helmet>
                <title>Auth: enter phone</title>
            </Helmet>
            <div>
                <Input
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />
                <Button onClick={enterPhone}>go</Button>
            </div>
        </>
    );
};

export default EnterPhoneStep;
