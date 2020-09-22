const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Models = require('./models.js');
const passport = require('passport');
const cors = require('cors');
const app = express();
const Movies = Models.Moive;
const Users = Models.Users;
const Director = Models.Director;
const { check, validationResult } = require('express-validator');

app.use(bodyParser.json());
// app.use(cors());
let allowedOrigins = ['http://localhost:8080', 'http://testsite.com'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        // If a specific origin isn’t found on the list of allowed origins
        let message =
          'The CORS policy for this application doesn’t allow access from origin ' +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);

require('./passport');
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
app.post(
  '/users',
  [
    check('Username', 'Username is required. Min 4 characters').isLength({
      min: 4,
    }),
    check('Username', "Username can't contain any spaces").notEmpty(),
    check('Username', 'Username has to be in all lowercases').isLowercase(),
    check(
      'Username',
      'Username contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
    check('Password', 'Password is required').notEmpty(),
    check(
      'Password',
      'Password contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
    check('Email', 'Email does not appear to be valid').isEmail(),
    check('Birthday', 'Invalid date format. Use YYYY/MM/DD').isDate(),
  ],
  (req, res) => {
    // Check the validation object for errors
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    console.log('req body', req.body);
    // Hash the password received from the request
    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username })
      .then((user) => {
        if (user) {
          return res
            .status(400)
            .send(req.body.Username + 'User already exists');
        } else {
          Users.create({
            Username: req.body.Username,
            Password: hashedPassword,
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
  }
);

// Update user info by user ID
app.put(
  '/users/:userID',
  [
    check('Username', 'Username is required. Min 4 characters').isLength({
      min: 4,
    }),
    check('Username', "Username can't contain any spaces").notEmpty(),
    check('Username', 'Username has to be in all lowercases').isLowercase(),
    check(
      'Username',
      'Username contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
    check('Password', 'Password is required').notEmpty(),
    check(
      'Password',
      'Password contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
    check('Email', 'Email does not appear to be valid').isEmail(),
    check('Birthday', 'Invalid date format. Use YYYY-MM-DD').isDate(),
  ],
  (req, res) => {
    // Check the validation object for errors
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
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
  }
);

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

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Listening on Port ' + port);
});
