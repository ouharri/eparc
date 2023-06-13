import axios from '../plugins/axios';

async function userInfo() {

    const userToken = JSON.parse(localStorage.getItem('app:auth'))?.USER_TOKEN || null;

    if (userToken === null) return {};

    try {
        const response = await axios({
            method: 'GET', url: '/userInfo', headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        return response.data;
    } catch (error) {
        return {};
    }
};

export default userInfo;