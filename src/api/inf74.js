import { Ajax } from './Ajax';

export default Ajax('https://transport.gis.inf74.ru/getroutes').then((data) => {
  return data;
});
