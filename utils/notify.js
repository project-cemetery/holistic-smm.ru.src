import axios from 'axios'


const BASE_PATH = 'https://api.usenotify.info/v0/'

export const telegram = (from, name, text) =>
    axios.post(`${BASE_PATH}telegram`, {
        user: '65400792',
        message: {
            medium: 'holistic-smm.ru',
            from,
            name,
            text,
        },
    })
