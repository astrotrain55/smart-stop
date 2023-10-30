import getRoutes from './inf74';
import staticApi from './static';
// import chelgortrans from './chelgortrans';

export default () => {
  return Promise.all([
    getRoutes,
    staticApi,
    // chelgortrans(3510004),
  ])
    .then(console.info)
    .catch(console.warn);
};
