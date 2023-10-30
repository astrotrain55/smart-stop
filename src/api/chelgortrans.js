import { Ajax } from './Ajax';

export default (id = 3510004) => Ajax(`http://chelgortrans.ru:33888/boardTest.aspx?id=${id}`);
