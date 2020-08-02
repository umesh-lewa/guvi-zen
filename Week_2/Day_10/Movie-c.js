class Movie{

 getPGMovies(mov) {               
 var pgMovies = [];        
 var pos = 0;

 for (var i = 0; i < mov.length; i++) {
   if (mov[i].rating == ("PG")) {
      pgMovies[pos] = mov[i];
      pos++;
   }

 }
 return pgMovies;
}
}
var movies = [{title : "Asuran",studio:"KK Studios",rating:"PG"},{title : "ENPT",Productions:"RR Studios",rating:"UA"}];

var movie = new Movie();
console.log(movie.getPGMovies(movies));