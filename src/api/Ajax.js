import axios from 'axios';

export default (url) => fetch(url).then((data) => data.text()).then((response => response.split(/\r?\n|\r/)));

export const Ajax = (url) => axios({ url, method: 'post' });
