const config = {
  development: {
    BASE_URL: 'http://localhost:3000/api/'
  },

  sand: {
    BASE_URL: 'http://localhost:3000/api/'
  },
  
  production: {
    BASE_URL: 'http://localhost:3000/api/'
  }
};

module.exports = config[process.env.NODE_ENV];