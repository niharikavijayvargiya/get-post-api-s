const { createApi } = require('unsplash-js');

// Setup Unsplash API client
const unsplash = createApi({
  accessKey: 'BC5NKKyeQSONchFSQp8oGl5bY_Mybj_1lrZ1UZUcOXk'
});

module.exports = { unsplash };
