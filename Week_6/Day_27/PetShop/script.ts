class PetAvailability {
	availablePets: Pet [] = [];
	enquiries: PetRequest [] = [];

	dogCount = 0;
	catCount = 0;
	parrotCount = 0;

	constructor(){
		
	}
	 
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	insertPets(){
		for (let index = 0; index < 5; index++) {
			this.availablePets.push(new Pet(`Dog ${index + 1}`,'Dog',this.getRandomInt(10000,19999)));

			this.availablePets.push(new Pet(`Cat ${index + 1}`,'Cat',this.getRandomInt(20000,29999)));

			this.availablePets.push(new Pet(`Parrot ${index + 1}`,'Parrot',this.getRandomInt(30000,39999)));
		  }
	}

	getCountOfDifferentPets(){
		this.dogCount = 0;
		this.catCount = 0;
		this.parrotCount = 0;

		this.availablePets.forEach((element) => {
			if(element.type == "Dog"){
				this.dogCount++;
			}else if(element.type == "Cat"){
				this.catCount++;
			}else if(element.type == "Parrot"){
				this.parrotCount++;
			}
		});

		console.log("dogCount : "+this.dogCount);
		console.log("catCount : "+this.catCount);
		console.log("parrotCount : "+this.parrotCount);
	}
}

class PetRequest{
	type:string;
	
	constructor(){

	}

	insertIncomingEnquiries(){

	}

	getStatus(){
		for(let i = 0  ; i  < 5 ; i ++){

			console.log();
		}
	}
}

class Pet{
	name:string;
	type:string;
	RFID:number;

	constructor(petName:string,petType:string,rfid:number){
		this.name = petName;
		this.type = petType;
		this.RFID = rfid;
	}
}

let avail = new PetAvailability();
avail.insertPets();

avail.getCountOfDifferentPets();