window.movie = {
  filterByTitle: (allMovies, name2) => {

    listName = []
    allMovies.filter(element => {
      if (element.hasOwnProperty('Title' || 'Director' || 'Year')) {
        element.Title.toLowerCase().match(name2.toLowerCase()) || (element.Director.toLowerCase().match(name2.toLowerCase())) || (element.Year.toLowerCase().match(name2.toLowerCase())) ? listName.push(element) : ''
      }
    })
    return listName
  },

  filterByGenre: (allMovies, genreId) => {
    let list = []
    allMovies.filter(element => {
      if (element.hasOwnProperty('Genre')) {
        element.Genre.includes(genreId) ? list.push(element) : ''
      }
    });
    return list;
  },

  //Esta llave cierra window
}