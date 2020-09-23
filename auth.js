const jwtSecret = 'secret';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { check, validationResult } = require('express-validator');

require('./passport.js');

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username,
    expiresIn: '7d',
    algorithm: 'HS256',
  });
};

/*  passport.authenticate as route handler -- can access req, res objects thru closure
    If authentication fails, user will be set to false.
    Info is optional arg containing additional details proived by the strategy's verify callback.
    req.login -- establish a session
*/
module.exports = (router) => {
  router.post(
    '/login',
    [
      check('Username', 'Username is required. Min 4 characters').isLength({
        min: 4,
      }),
      check('Username', 'Username is required').not().isEmpty(),
      check('Username', 'Username has to be in all lowercases').isLowercase(),
      check(
        'Username',
        'Username contains non alphanumeric characters - not allowed.'
      ).isAlphanumeric(),
      check('Password', 'Password is required').not().isEmpty(),
      check(
        'Password',
        'Password contains non alphanumeric characters - not allowed.'
      ).isAlphanumeric(),
    ],
    (req, res) => {
      // Check the validation object for errors
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      passport.authenticate(
        'local',
        { session: false },
        (error, user, info) => {
          if (error || !user) {
            return res.status(400).json({
              message: 'Something is not right',
              user: user,
            });
          }
          req.login(user, { session: false }, (error) => {
            if (error) {
              res.send(error);
            }
            let token = generateJWTToken(user.toJSON());
            return res.json({ user, token });
          });
        }
      )(req, res);
    }
  );
};
