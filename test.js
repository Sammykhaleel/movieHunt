const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');
const { json } = require('body-parser');

const app = express();
app.use(bodyParser.json());

let movies = [
  {
    title: 'Inception',
    genre: 'Sci-fi',
    director: 'Christopher Nolan',
    id: '23psdojf',
  },
  {
    title: 'Wolf of Wall Street',
    genre: 'Comedy',
    director: 'Martin Scorsese',
    id: '18dsfksd',
  },
  {
    title: 'Rocky',
    genre: 'Sport',
    director: 'John G. Avildsen',
    id: 'sd68f861we',
  },
  {
    title: 'Matrix',
    genre: 'Action',
    director: 'Lilly Wachowski, Lana Wachowski',
    id: 'asdfgws6',
  },
  {
    title: 'Constantine',
    genre: 'Horror',
    director: 'Francis Lawrence',
    id: 'n8n6fd3e8',
  },
];

let movieData = [
  {
    title: 'Inception',
    description: 'Dom Cobb (Leonardo DiCaprio) is a thief...',
    genre: 'Sci-fi',
    director: 'Christopher Nolan',
    imgURL: 'https://...jpg',
    featured: true,
    id: '23psdojf',
  },
  {
    title: 'Wolf of Wall Street',
    description:
      'In 1987, Jordan Belfort (Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm....',
    genre: 'Comedy',
    director: 'Martin Scorsese',
    imgURL: 'https://...jpg',
    featured: true,
    id: '18dsfksd',
  },
  {
    title: 'Rocky',
    description:
      'Rocky Balboa (Sylvester Stallone), a small-time boxer from working-class Philadelphia...',
    genre: 'Sport',
    director: 'John G. Avildsen',
    imgURL: 'https://...jpg',
    featured: true,
    id: '98sdh9f39',
  },
  {
    title: 'Matrix',
    description:
      'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure ...',
    genre: 'Action',
    director: 'Lilly Wachowski, Lana Wachowski',
    imgURL: 'https://...jpg',
    featured: true,
    id: 'asdfgws6',
  },
  {
    title: 'Constantine',
    description:
      'As a suicide survivor, demon hunter John Constantine (Keanu Reeves) has literally been to hell and back...',
    genre: 'Horror',
    director: 'Francis Lawrence',
    imgURL: 'https://...jpg',
    featured: true,
    id: 'n8n6fd3e8',
  },
];

let genres = [
  {
    name: 'Sci-fi',
    description: 'Lorem anim ut id duis do irure',
  },
  {
    name: 'Comedy',
    description: 'Lorem anim ut id duis do irure',
  },
  {
    name: 'Sport',
    description: 'Lorem anim ut id duis do irure',
  },
  {
    name: 'Action',
    description: 'Lorem anim ut id duis do irure',
  },
  {
    name: 'Horror',
    description: 'Lorem anim ut id duis do irure',
  },
];

let directors = [
  {
    director: 'Christopher Nolan',
    DOB: 'July 30, 1970',
    DOD: null,
    bio:
      'Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director...',
  },
];

let users = [
  {
    username: 'GC',
    password: '123456',
    email: '123@456.com',
    dob: '07/12/1990',
    favorites: [{}],
  },
];

app.get('/', (req, res) => {
  res.sendFile(
    'C:/Users/isaac/Desktop/GC/careerfoundry/nodetest/public/documentation.html'
  );
});

// Return all movies (20 movies per page by default)
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Return all data of a movie by title
app.get('/movies/data/:title', (req, res) => {
  res.json(
    movieData.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

// Return a genre's description by genre name
app.get('/genres/:genre', (req, res) => {
  res.json(
    genres.find((genre) => {
      return genre.name === req.params.genre;
    })
  );
});

// Return a director's data by name
app.get('/directors/:directorName', (req, res) => {
  res.json(
    directors.find((director) => {
      return director.director === req.params.directorName;
    })
  );
});

// New user register
app.post('/users/new', (req, res) => {
  let newUser = req.body;

  if (
    !newUser.username ||
    !newUser.password ||
    !newUser.email ||
    !newUser.dob
  ) {
    res
      .status(400)
      .send(
        'Error occurred. Please try again! <br />Please fill out all information'
      );
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(`${newUser.username} has been registered!`);
  }
});

// Update user info --- user name & password restriction not applied yet
app.put('/users/:username', (req, res) => {
  let updateUser = req.body;

  if (
    !updateUser.username ||
    !updateUser.password ||
    !updateUser.email ||
    !updateUser.dob
  ) {
    res
      .status(400)
      .send(
        'Error occurred. Please try again! <br />Please fill out all information'
      );
  }
  if (
    !users.find((user) => {
      return user.username === updateUser.username;
    })
  ) {
    res
      .status(400)
      .send('Error occurred. Please try again! <br />User name not found');
  } else {
    const updatingUser = users.find((user) => {
      return user.username === updateUser.username;
    });
    updatingUser.username = updateUser.username;
    updatingUser.password = updateUser.password;
    updatingUser.email = updateUser.email;
    updatingUser.dob = updateUser.dob;
    res.status(201).send(`${updateUser.username} has been updated!`);
  }
});

// Add a movie to favorite list (Favorite list only available for registered users)
app.put('/users/:username/favorite/:movieID', (req, res) => {
  let username = users.find((user) => {
    return user.username === req.params.username;
  });
  let addingMovie = movies.find((movie) => {
    return movie.id === req.params.movieID;
  });
  if (!username || !addingMovie) {
    res.status(400).send('Error occurred. Please try again!');
  } else {
    let favorite = username.favorites;
    favorite.push(addingMovie);
    res.send(
      `${addingMovie.title} has been added to ${username.username}'s favorite list!`
    );
  }
});

// Remove a movie from favorite list
app.delete('/users/:username/favorite/:movieID', (req, res) => {
  let username = users.find((user) => {
    return user.username === req.params.username;
  });
  let removingMovie = movies.find((movie) => {
    return movie.id === req.params.movieID;
  });
  if (!req.params.username || !req.params.movieID) {
    res.status(400).send('Error occurred. Please try again!');
  } else {
    let favorite = username.favorites;
    let a = favorite.indexOf(removingMovie);
    favorite.splice(a, a - 1);
    res.send(
      `${removingMovie.title} has been removed from ${username.username}'s favorite list!`
    );
  }
});

// Deregister existing user
app.delete('/users/:username', (req, res) => {
  let username = users.find((user) => {
    return user.username === req.params.username;
  });

  if (!username) {
    res
      .status(400)
      .send('Error occurred. Please try again! <br/>User name not found.');
  }
  let a = users.indexOf(username);
  users.splice(a, a - 1);
  res.send(`${username.username} has been deregistered`);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
