const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB

//if we have a function in a module where the function is effectiviley executed there and then we only need to import the module no need to export it