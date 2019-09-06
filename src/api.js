import axios from 'axios';
const host = 'http://5.130.51.166:5000';

export const enterPhone = (phone) => axios.post(
    `${host}/api/accounts/register`,
    { PhoneNumber: phone }
);

export const enterCode = (phone, code) => axios.post(
    'http://5.130.51.166:5000/api/accounts/auth',
    { UserName: phone, Password: code }
);
