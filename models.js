const mongoose = require('mongoose');

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
