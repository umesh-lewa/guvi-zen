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