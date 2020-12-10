const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Models = require('./models.js');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const app = express();
const Movies = Models.Moive;
const Users = Models.Users;
const { check, validationResult } = require('express-validator');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use('/client', express.static(path.join(__dirname, 'client', 'dist')));
app.get('/client/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// let allowedOrigins = ['http://localhost:8080', 'http://testsite.com'];
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         // If a specific origin isn’t found on the list of allowed origins
//         let message =
//           'The CORS policy for this application doesn’t allow access from origin ' +
//           origin;
//         return callback(new Error(message), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

require('./passport');
let auth = require('./auth')(app);

// mongoose.connect('mongodb://localhost:27017/movieHuntDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: true,
// });

mongoose.connect(process.env.CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

app.get('/', function (req, res) {
  res.send('Welcome to Flix Fix!');
});

// Get all users
/**
 * Class representing a socket connection.
 *
 * @class
 * @tutorial socket-tutorial
 * @name getuser
 */
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

//get a user by username
app.get(
  '/users/:Username',
  passport.authenticate('jwt', { session: false }),
  function (req, res) {
    Users.findOne({ Username: req.params.Username })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      });
  }
);

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

// Get movie genres by genre name
app.get('/genres/:Name', function (req, res) {
  Movies.findOne({ 'Genre.Name': req.params.Name })
    .then(function (movies) {
      res.json(movies.Genre);
    })
    .catch(function (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get directors by name
app.get('/directors/:Name', function (req, res) {
  Movies.findOne({ 'Director.Name': req.params.Name })
    .then(function (movies) {
      res.json(movies);
    })
    .catch(function (err) {
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
    check('Username', 'Username is required').not().isEmpty(),
    check(
      'Username',
      'Username contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
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

    // Hash the password received from the request
    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username })
      .then((user) => {
        if (user) {
          return res.status(400).send(user.Username + ' User already exists');
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
  '/users/:Username',
  [
    check('Username', 'Username is required. Min 4 characters').isLength({
      min: 4,
    }),
    check('Username', 'Username has to be in all lowercases').isLowercase(),
    check(
      'Username',
      'Username contains non alphanumeric characters - not allowed.'
    ).isAlphanumeric(),
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
      { Username: req.params.Username },
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
app.post('/users/:Username/favorite/add/:movieID', (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
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
app.post('/users/:Username/favorite/remove/:movieID', (req, res) => {
  Users.findOneAndUpdate(
    { Username: req.params.Username },
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
app.delete('/users/:Username', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found!');
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
