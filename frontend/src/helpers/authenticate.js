import axios from '../plugins/axios';

async function isAuthenticated() {
    const userToken = JSON.parse(localStorage.getItem('app:auth'))?.USER_TOKEN || null;

    if (userToken === null) return false;

    try {
        const response = await axios({
            method: 'POST', url: '/check-auth', headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        return response.data.valid;
    } catch (error) {
        return false;
    }
}

export default isAuthenticated;