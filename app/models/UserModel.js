const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String
  }
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;