import React, { useState } from 'react'
import EnterPhoneStep from './EnterPhoneStep';
import EnterCodeStep from './EnterCodeStep';
import Error from './Error';

const Auth = () => {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState(null);
    const [step, setStep] = useState(0);
    const nextStep = () => setStep(step + 1);

    if (error) {
        return <Error {...{ setError, setPhone, setCode, setStep, }} />;
    }

    return step
        ? <EnterCodeStep {...{ phone, code, setCode, setError }} />
        : <EnterPhoneStep {...{ setCode, phone, setPhone, nextStep, setError }} />;
};

export default Auth;
