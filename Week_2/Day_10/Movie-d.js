class Movie{
	constructor(title, studio,rating) {
    this.title = title;
    this.studio = studio;
    if(rating == undefined){
    	this.rating = "PG";
    }else{
    	this.rating = rating;
    }
  } 
}

var myMovie = new Movie("Casino Royale", "Eon Productions" , "PG13");
console.log(myMovie);