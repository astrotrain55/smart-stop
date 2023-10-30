import smartgrid from 'smart-grid';

const settings = {
  mobileFirst: false,
  filename: 'grid',
  outputStyle: 'styl',
  columns: 24,
  offset: '2%',
  container: {
    maxWidth: '990px',
    fields: '45px' /* side fields */
  },
  breakPoints: {},
  mixinNames: {
    size: 'col-size',
    clearfix: 'cf'
  },
  tab: '  '
};

smartgrid('./src/assets', settings);
