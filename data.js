const movieUserRatings = {
  Jill: {
    'Avenger: Age of Ultron': 7.0,
    'Django Unchained': 6.5,
    'Gone Girl': 9.0,
    'Kill the Messenger': 8.0
  },
  Julia: {
    'Avenger: Age of Ultron': 10.0,
    'Django Unchained': 6.0,
    'Gone Girl': 6.5,
    'Kill the Messenger': 6.0,
    'Zoolander': 6.5
  },
  Max: {
    'Avenger: Age of Ultron': 7.0,
    'Django Unchained': 7.0,
    'Gone Girl': 10.0,
    'Horrible Bosses 2': 6.0,
    'Kill the Messenger': 5.0,
    'Zoolander': 10.0
  },
  Robert: {
    'Avenger: Age of Ultron': 8.0,
    'Django Unchained': 7.0,
    'Horrible Bosses 2': 5.0,
    'Kill the Messenger': 9.0,
    'Zoolander': 9.0
  },
  Sam: {
    'Avenger: Age of Ultron': 10.0,
    'Django Unchained': 7.5,
    'Gone Girl': 6.0,
    'Horrible Bosses 2': 3.0,
    'Kill the Messenger': 5.5,
    'Zoolander': 7.0
  },
  Toby: {
    'Avenger: Age of Ultron': 8.5,
    'Django Unchained': 9.0,
    'Zoolander': 2.0
  },
  William: {
    'Avenger: Age of Ultron': 6.0,
    'Django Unchained': 8.0,
    'Gone Girl': 7.0,
    'Horrible Bosses 2': 4.0,
    'Kill the Messenger': 6.5,
    'Zoolander': 4.0
  }
}

const moviesByRating = {
  'Avenger: Age of Ultron': {
    Jill: 7,
    Julia: 10,
    Max: 7,
    Robert: 8,
    Sam: 10,
    Toby: 8.5,
    William: 6
  },
  'Django Unchained': {
    Jill: 6.5,
    Julia: 6,
    Max: 7,
    Robert: 7,
    Sam: 7.5,
    Toby: 9,
    William: 8 },
  'Gone Girl': {
    Jill: 9,
    Julia: 6.5,
    Max: 10,
    Sam: 6,
    William: 7
  },
  'Kill the Messenger': {
    Jill: 8,
    Julia: 6,
    Max: 5,
    Robert: 9,
    Sam: 5.5,
    William: 6.5
  },
  'Zoolander': {
    Julia: 6.5,
    Max: 10,
    Robert: 9,
    Sam: 7,
    Toby: 2,
    William: 4
  },
  'Horrible Bosses 2': {
    Max: 6,
    Robert: 5,
    Sam: 3,
    William: 4
  }
}

module.exports = {
  moviesByRating, movieUserRatings,
}
