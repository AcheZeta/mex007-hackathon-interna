window.movie = {
  filterByTitle: (allMovies, name2) => {

    const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase())||(element.Year.toLowerCase().match(name2.toLowerCase()))||(element.Director.toLowerCase().match(name2.toLowerCase()))))
    return filteringTitle;
  },
  // filterByGenre: (allMovies, selectButton) => {

  //   const filteringGenre = allMovies.filter(element => (element.Genre.toLowerCase().match(selectButton.toLowerCase())));
  //   return filteringGenre;
  // },
  // filterByYear: (allMovies, name2) => {

  //   const filteringGenre = allMovies.filter(element => (element.Year));
  //  return filteringGenre;
  // },
  // filterByDirector: (allMovies, name2) => {

  //   const filteringGenre = allMovies.filter(element => (element.Director.toLowerCase().match(name2.toLowerCase())));
  //   return filteringGenre;
  // },  
} //Esta llave cierra window  menu