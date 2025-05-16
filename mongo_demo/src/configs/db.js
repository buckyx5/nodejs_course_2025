const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/myapp');
    console.log('成功連接到 MongoDB');
  } catch (error) {
    console.error('無法連接到 MongoDB', error);
  }
}

module.exports = connectToDatabase;