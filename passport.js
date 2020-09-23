const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  Models = require('./models.js'),
  passportJWT = require('passport-jwt');

let Users = Models.Users,
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

// Takes username and pwd from request body to check if the user already exists.
// This will receive hashed password
passport.use(
  new LocalStrategy(
    {
      usernameField: 'Username',
      passwordField: 'Password',
    },
    (username, password, callback) => {
      console.log(username + ' ' + password);
      Users.findOne({ Username: username }, (error, user) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        if (!user) {
          console.log('incorrect username');
          return callback(null, false, {
            message: 'Incorrect username or password.',
          });
        }
        if (!user.validatePassword(password)) {
          console.log('incorrect password');
          return callback(null, false, { message: 'Incorrect password.' });
        }
        console.log('finished', user);
        return callback(null, user);
      });
    }
  )
);

// Authenticate user using JWT submitted along the request.
passport.use(
  new JWTStrategy(
    {
      // Extracts JWT from HTTP request header
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    },
    (jwtPayload, callback) => {
      return Users.findById(jwtPayload._id)
        .then((user) => {
          return callback(null, user);
        })
        .catch((error) => {
          return callback(error);
        });
    }
  )
);
