window.movie = {
  filterByTitle: (allMovies, name2) => {
    const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase()) || (element.Year.toLowerCase().match(name2.toLowerCase())) || (element.Director.toLowerCase().match(name2.toLowerCase()))))
    console.log(element, 'element');
    return filteringTitle;
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