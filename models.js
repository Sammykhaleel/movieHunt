const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let movieSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Director: {
    Name: String,
    Birth: String,
    Death: String,
  },
  Genre: [
    {
      Name: String,
      Description: String,
    },
  ],
  ImageURL: String,
  Featured: Boolean,
  Actors: [String],
  ReleaseDate: String,
  IMDbRating: String,
  RunTime: String,
});

let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

// Assign a function to static object of userSchema model. All user instance will have function hashPassword
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

// Assign a function to methods object of userSchema model. All user instance will have function validatePassword
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

let directorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Bio: String,
  Birth: String,
  Death: String,
});

let Movie = mongoose.model('Movie', movieSchema);
let Users = mongoose.model('User', userSchema);
let Director = mongoose.model('Director', directorSchema);

module.exports.Moive = Movie;
module.exports.Users = Users;
module.exports.Director = Director;
