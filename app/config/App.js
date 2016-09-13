const config = {
  development: {
    BASE_URL: 'http://localhost:3000/api/'
  },

  sand: {
    BASE_URL: 'http://localhost:3000/api/'
  },
  
  prod: {
    BASE_URL: 'http://localhost:3000/api/'
  }
};

module.exports = config[process.env.API_URL];