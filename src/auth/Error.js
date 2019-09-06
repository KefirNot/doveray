import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import { TokenContext } from './TokenContext';

const EnterCodeStep = (props) => {
    const {
        setError,
        setPhone,
        setCode,
        setStep,
    } = props;

    const { setToken } = useContext(TokenContext);

    const reset = () => {
        setError(null);
        setPhone('');
        setCode('');
        setStep(0);
        setToken(null);
    };

    return (
        <>
            <Helmet>
                <title>Auth: error</title>
            </Helmet>
            <div>
                Error!
                <Button onClick={reset}>reset</Button>
            </div>
        </>
    );
};

export default EnterCodeStep;
