const User = require('../model/usermodel');
const path = require('path');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.sendFile(path.join(__dirname, '..', 'views' , 'landingpage.html'))
  } catch (error) {
    console.error('Error saving user:', error);
    res.redirect('/');
  }
};
