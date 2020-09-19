const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Models = require('./models.js');
const passport = require('passport');
require('./passport');

const app = express();
app.use(bodyParser.json());
const Movies = Models.Moive;
const Users = Models.Users;
const Director = Models.Director;

let auth = require('./auth')(app);

mongoose.connect('mongodb://localhost:27017/movieHuntDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// Get all users
app.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get a user by username
app.get('users/:Username', (req, res) => {
  Users.find({ Username: req.params.Username })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get all movies
app.get(
  '/movies',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Movies.find()
      .then((movies) => {
        res.status(200).json(movies);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
  }
);

// Get a movie by title
app.get('/movies/:Title', (req, res) => {
  Movies.findOne({ Title: req.params.Title })
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => {
      console.err(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get all directors
app.get(
  '/directors',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Director.find()
      .then((directors) => {
        res.status(200).json(directors);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ', err);
      });
  }
);

// Get a director by id
app.get('/directors/:directorID', (req, res) => {
  Director.find({ _id: req.params.directorID })
    .then((director) => {
      res.status(200).json(director);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Add a new user
app.post('/users', (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + 'User already exists');
      } else {
        Users.create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        })
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send('Error: ' + err);
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Update user info by user ID
app.put('/users/:userID', (req, res) => {
  Users.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday,
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

// Add favorite movie
app.put('/users/:userID/favorite/add/:movieID', (req, res) => {
  Users.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $push: {
        FavoriteMovies: req.params.movieID,
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

// Delete favorite movie from the list
app.put('/users/:userID/favorite/remove/:movieID', (req, res) => {
  Users.findOneAndUpdate(
    { _id: req.params.userID },
    {
      $pull: {
        FavoriteMovies: req.params.movieID,
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.send.status(500).send('Error: ' + err);
      } else {
        res.status(200).json(updatedUser);
      }
    }
  ).catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

// Deregister a user
app.delete('/users/:userID', (req, res) => {
  Users.findOneAndRemove({ _id: req.params.userID })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.userID + ' was not found!');
      } else {
        res
          .status(200)
          .send(
            req.params.userID +
              ' / ' +
              user.Username +
              ' has been deregistered.'
          );
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

app.listen(8080, () => {
  console.log('Connected to port 8080');
});
